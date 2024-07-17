import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Post {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": null
    }
}

export const usePost = ({ id }: {id: string}) => {
    const [loading, setloading] = useState(true);
    const [post, setpost] = useState<Post>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setpost(response.data.post);
            setloading(false)
        })
    }, [])

    return {
        loading,
        post
    }
} 

export const usePosts = () => {
    const [loading, setloading] = useState(true);
    const [posts, setposts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setposts(response.data.posts);
            setloading(false)
        })
    }, [])

    return {
        loading,
        posts
    }
}