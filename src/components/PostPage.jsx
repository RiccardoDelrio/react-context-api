import PostList from "./PostList";
import ErrorMessage from "./ErrorMessage";

export default function PostPage() {
    return (
        <>
            <div className="container text-center">
                <ErrorMessage />
                <h1>Welcome to the Post Page!</h1>
                <div className="row row-cols-1 row-cols-md-4">

                    <PostList />

                </div>
            </div>

        </>

    )
}
