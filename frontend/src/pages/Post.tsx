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
    
    return <div>
        <PostPage post={post} />
    </div>
}