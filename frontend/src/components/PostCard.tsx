import { Link } from "react-router-dom"

interface PostCardProps {
    authorName : string,
    title: string,
    content: string,
    publishedDate: string
    id: number
}

export const PostCard = ({
    id,
    authorName, 
    title,
    content,
    publishedDate,

}: PostCardProps) => {
    return <Link to={`/post/${id}`}>
        <div className="p-4 border-b min-w-full cursor-pointer" >
            <div className="flex pt-2">
                <div className="">
                    <Avatar name={authorName}/>
                </div>
                <div className="flex justify-center flex-col font-medium text-sm pl-1.5">
                    { authorName }
                </div>
            </div>
            <div className="text-2xl font-bold pt-3 pb-1">
                { title }
            </div>
            <div className="text-gray-500 font-normal pb-3">
                { content.slice(0, 100) + "..." }
            </div>
            <div className="flex">
                <div className="font-light text-xs">
                    { publishedDate }
                </div>
                <div className="pl-5 font-extrabold text-xs text-gray-500">
                    {`${Math.ceil(content.length / 100)}minute(s) read`}
                </div>
            </div>
        </div>
        </Link>
}

interface Avatartype{
    name: string,
    size?: "small" | "big"
}

export const Avatar:React.FC<Avatartype> = ({name, size = "small"}) => {    
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-500 rounded-full `}>
        <span className={`${size === "small" ? "text-xs" : "text-2xl"} font-medium text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
}