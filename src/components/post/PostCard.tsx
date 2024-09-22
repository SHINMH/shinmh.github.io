import Link from 'next/link';
import { Post } from '@/config/types';
import Image from 'next/image';
import postImage from './javascript.png';

export default function PostCard(props: { post: Post; key: number }) {
    const { ...post } = props.post;

    return (
        <Link href={`/posts/${post.slug}`}>
            <li
                className={
                    'flex h-full flex-col gap-2 overflow-hidden rounded-lg bg-white drop-shadow-md'
                }
            >
                <Image
                    src={postImage}
                    alt={'post image'}
                    className={'aspect-video w-full object-cover'}
                />
                <div className="p-4">
                    <p className="mb-1 text-sm text-primary-500">
                        Andrea Felsted • <time>{post.date}</time>
                    </p>
                    <h3 className="text-xl font-medium text-gray-900">{post.title}</h3>
                    <p className="mt-1 text-gray-500">{post.description}</p>
                    <div className="mt-4 flex gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                            Design
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                            Product
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                            Develop
                        </span>
                    </div>
                </div>
            </li>
        </Link>
    );
}