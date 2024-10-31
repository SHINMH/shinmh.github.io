import PostCard from '@/components/post/PostCard';
import { Post } from '@/config/types';
import { getPostList } from '@/lib/post';

type Props = {
  params: { category: string; slug: string };
};

const PostListPage = async ({ params }: Props) => {
  const postList: Post[] = await getPostList(params.category);

  return (
    <section className={'mx-auto w-full max-w-[950px]'}>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {postList.map((post: Post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default PostListPage;
