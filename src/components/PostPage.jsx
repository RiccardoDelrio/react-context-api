import PostList from "./PostList";

export default function PostPage() {
    return (
        <>
            <div className="container text-center">
                <h1>Welcome to the Post Page!</h1>
                <div className="row row-cols-1 row-cols-md-4">

                    <PostList></PostList>
                </div>
            </div>

        </>

    )
}
