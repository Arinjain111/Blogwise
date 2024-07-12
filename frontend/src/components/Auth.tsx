import { SigninInput } from "@arinjain111/medium-commons";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
    const navigate = useNavigate();
    const [ postInputs, setPostInputs ] = useState<SigninInput>({
        name: "",
        email: "",
        password: ""
        
    });

    async function sendRequest() {
        try{
           const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
           const jwt = response.data;
           localStorage.setItem("token", jwt);
           navigate("/blogs");
        } catch(e) {
            alert("Error while signing up")
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-4xl font-semibold" >
                        Create an Account
                    </div>
                    <div className="text-base pb-8 pt-2 flex justify-center">
                        { type === "signin" ? "Dont have an account ?": "Already have an account ?" }
                        <Link className="pl-2 underline" to = { type === "signin" ? "/signup": "/signin" }>
                            { type === "signin" ? "Sign up": "Sign in" }
                        </Link>
                    </div>
                </div>
                <div>
                {type === "signup" ? <LabelledInput label="Name" placeholer="full name" onchange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value,
                    })
                }} /> : null}

                <LabelledInput label="Email" placeholer="xyz@example.com" onchange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value,
                    })
                }} />

                <LabelledInput label="Password" type={"password"} placeholer="12345678" onchange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value,
                    })
                }} />
                </div>   
                <div className="pt-8">
                <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-3.5 me-2 mb-0 w-full">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholer: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholer, onchange, type }: LabelledInputType) {
    return <div>
    <label className="block mb-2 text-sm font-bold text-black pt-4">{label}</label>
    <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholer} required />
</div>
}