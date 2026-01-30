import PostList from "./PostList"
import { useError } from "../contexts/ErrorContext"

export default function PostPage() {
    const { error } = useError()

    return (
        <>
            <div className="container text-center">
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <h1>Welcome to the Post Page!</h1>
                <div className="row row-cols-1 row-cols-md-4">
                    <PostList />
                </div>
            </div>
        </>
    )
}
