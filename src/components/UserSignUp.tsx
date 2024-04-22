import React, {useState} from "react";
import Navbar from "./Navbar.tsx";
import {useNavigate} from "react-router-dom";

export default function UserSignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const bodyData = {
            username: username,
            password: password
        }

        await fetch("https://wovie-backend.onrender.com/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        navigate('/login');
    }
    return (
        <div className="bg-white h-screen ">
            <Navbar/>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="bg-slate-100 rounded-r-2xl h-[50vh] w-[40vh] p-6">
                    <p className="font-semibold text-[2.5vh] mb-5">Einfach ausfüllen und loslegen!</p>
                    <form className="flex-col space-y-3" onSubmit={handleSubmit}>
                        <label className="label login text-sm font-semibold">Username:</label><br/>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <label className="label login inline-block text-sm font-semibold ">Password:</label><br/>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button
                            className="bg-white hover:border-wovie text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded shadow"
                            type="submit" onSubmit={() => handleSubmit}>Registrieren
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
