import { Avatar } from "./PostCard"
import { Link } from "react-router-dom"
import Write from "../assets/Write.png"


export const Appbar = () =>{
    return <div className="border-b flex justify-between px-6 p-4 items-center">
        <div className="text-3xl font-arin font-extrabold">
            <Link to = {'/posts'}>
                Blogwise
            </Link>
        </div>
        <div className="flex items-center gap-8 transition dutration-300">
            <Link to={'/Write'}>
                <div className="text-sm flex gap-1.5 items-center">
                    <img src={Write} alt="Write" className="size-3.5" />
                    <div>Write</div>
                </div>
            </Link>
            <div>
                <Avatar size={"big"} name={"Arin"}/>
            </div>
        </div>
    </div>
}