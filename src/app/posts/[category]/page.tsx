import PostListPage from '@/components/post/PostListPage';

export default function CategoryPage({params}: {params: {slug:string}}) {
    console.log(params);

    return (
        <main className={'mt-[64px]'}>
            {/*<PostListPage params={params}/>*/}
        </main>
    );
}
