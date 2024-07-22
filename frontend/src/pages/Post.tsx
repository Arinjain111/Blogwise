import { useParams } from "react-router-dom";
import { usePost } from "../Hooks/Index"
import { PostPage } from "../components/PostPage";
import { Appbar } from "../components/AppBar";

export const Post = () => {
    const {id} = useParams();
    const {loading, post} = usePost({
        id: id || "" 
    });
    if (loading) {
        return <div>
            <Appbar />
            loading...
        </div>
    }
    // will check if the post Type check will reload or not.
    // if not loaded will not render the post
    return <div>
        {post ? <PostPage post={post} /> :null}
    </div>
}