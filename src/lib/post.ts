import fs from 'fs';
import matter from 'gray-matter';
import { Post, PostMatter } from '@/config/types';
import path from 'path';
import { sync } from 'glob';
import readingTime from 'reading-time';
import dayjs from 'dayjs';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = (category?: string) => {
  const folder = category || '**';

  return sync(`${POSTS_PATH}/${folder}/*.mdx`);
};

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const frontMatter = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);

  return {
    ...frontMatter,
    ...postDetail,
  };
};

export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map(token => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');
  console.log(filePath)

  const [categoryPath, slug] = filePath.split('/');
  const url = `/${categoryPath}/${slug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);

  return { url, categoryPath, categoryPublicName, slug };
};

const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const frontMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(frontMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');

  return { ...frontMatter, dateString, content, readingMinutes };
};

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${slug}.mdx`;

  const detail = await parsePost(filePath);
  return detail;
};

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(postPaths.map(postPath => parsePost(postPath)));

  return sortPostList(postList);
};