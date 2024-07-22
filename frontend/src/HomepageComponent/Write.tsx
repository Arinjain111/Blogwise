import axios from "axios"
import { Avatar } from "../components/PostCard"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Write = () => {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <div className="bg-red-40 min-h-auto flex items-center justify-between px-16 xl:px-56 pt-4">
            <div className="font-arin text-4xl font-bold">Blogwise</div>
            <div className="flex items-center gap-5">
                <button onClick={async() => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/post`, {
                        title,
                        content: description,
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/post/${response.data.id}`)
                }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5">Publish</button>
                <div><Avatar size="big" name="Arin"/></div>
            </div>        
        </div>
        <div className="flex justify-center">
            <div className="bg-yelw-400 pt-11 px-32 ">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" placeholder="Title" className="text-6xl outline-none font-arin2 w-full"/>
                <input onChange={(e) => {
                    setDescription(e.target.value);
                }} type="text" placeholder="A new story awaits . . ." className="text-lg w-full outline-none "></input>
            </div>
        </div>
    </div>
}