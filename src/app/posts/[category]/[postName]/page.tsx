import React from 'react';
import {Post} from '@/config/types';
import {MDXRemote} from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import {getPostDetail} from "@/lib/post";

type Props = {
    params: { category: string; slug: string };
};

export async function generateMetadata({params}: { params: Post }) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : '';
    return {
        title: `${id.replaceAll('_', '')}`,
    };
}

const PostPage = async ({params: {category, slug}}: Props) => {
    const post = await getPostDetail(category, slug);

    return (
        <main>
            <MDXRemote
                source={post.content}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm, remarkBreaks],
                        rehypePlugins: [
                            [
                                rehypePrettyCode,
                                {theme: {dark: 'github-dark-dimmed', light: 'github-light'}},
                            ],
                            rehypeSlug,
                        ],
                    },
                }}
            />
        </main>
    );
}

export default PostPage;