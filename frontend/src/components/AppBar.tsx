import { Avatar } from "./PostCard"
import { Link } from "react-router-dom"

export const Appbar = () =>{
    return <div className="border-b flex justify-between px-6 p-4">
        <div className="text-3xl font-arin font-extrabold">
            <Link to = {'/posts'}>
                Blogwise
            </Link>
        </div>
        <div>
            <Avatar size={"big"} name="Arin"/>
        </div>
    </div>
}