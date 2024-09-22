import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';
import getPostMetadata from "@/utils/getPostMetadata";

async function getPostContent(slug: any) {
    const folder = "posts/";

    const filePath = Array.isArray(slug)
        ? path.join(folder, ...slug) + '.md'
        : path.join(folder, `${slug}.md`);

    const content = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(content);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        ...matterResult,
        content: contentHtml,  // HTML로 변환된 콘텐츠를 반환
    };
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();

    return posts.map((post) => ({slug: post.slug.split("/")}));
};

export async function generateMetadata({
                                           params,
                                       }: {
    params: any;
}) {
    const id = params?.slug ? " ⋅ " + params?.slug : "";
    return {
        title: `${id.replaceAll("_", "")}`,
    };
}

export default async function PostPage(props: any) {
    const slug = props.params.slug;
    const post = await getPostContent(slug);

    return (
        <main>
            <article dangerouslySetInnerHTML={{__html: post.content}}/>
        </main>
    );
}
