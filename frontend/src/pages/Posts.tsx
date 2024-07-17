import { Appbar } from "../components/AppBar"
import { PostCard } from "../components/PostCard"
import { usePosts } from "../Hooks/Index"

export const Posts = () => {
    const {loading, posts} = usePosts()

    if (loading) {
        return <div>
            <Appbar />
            loading... 
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
        <div className="max-w-xl">
            {posts.map( post => <PostCard 
                id={post.id}
                authorName={post.author.name || "Arin jain"}
                title={post.title}
                content={post.content}
                publishedDate="24/05/24"
            />)}
        </div>
        </div>
    </div>
     
}