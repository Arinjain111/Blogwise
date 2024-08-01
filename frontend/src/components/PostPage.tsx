import { Appbar } from "./AppBar"
import { Post } from "../Hooks/Index"
import { Avatar } from "./PostCard"

export const PostPage = ({ post }: {post: Post}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid md:grid-cols-12 max-w-screen-xl px-4 md:px-10 pt-6 md:pt-20">
                <div className=" col-span-8">
                    <div className=" text-3xl md:text-5xl font-extrabold">
                        {post.title}
                    </div>
                    <div className="text-gray-500 pt-3">
                        posted on 2nd December 2023
                    </div>
                    <div className="pt-5 text-lg text-gray-700">
                    {post.content}
                    </div>
                </div>
                <div className="col-span-8 md:col-span-4 px-1 md:px-20">
                    <div className="pt-12 md:pt-4 font-bold text-gray-600">
                        <div className="pl-2 md:pl-1">Author</div>
                        <div className="flex">
                            <div className="pr-2 flex flex-col justify-center pb-5 md:pb-10">
                                <Avatar size="big" name={post.author.name || "Anonymous"}/>
                            </div>
                            <div>
                                <div className=" text-3xl font-medium">
                                    {post.author.name}                        
                                </div>
                                <div className="font-medium text-gray-400 pt-2">
                                    "Random catch phrase about the Authors ability to grab user's attention"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
    
}