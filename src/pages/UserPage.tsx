import Navbar from "../components/Navbar.tsx";
import {useEffect, useState} from "react";
import UserLogin from "../components/UserLogin.tsx";
import {useAuth} from "../context/AuthenticationContext.tsx";
import {useNavigate} from "react-router-dom";

type Profile = {
    username: string;
}

export default function UserPage() {

    const {authorized, profile, login, logout} = useAuth();
    const nav = useNavigate();
    const fetchProfile = () => {
        fetch("https://wovie-backend.onrender.com/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    console.log("res", response);
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(profileData => {
                console.log("profile", profileData)
                login(profileData);
            })
            .catch(error => {
                console.error('Error fetching profile:', error);
                logout();
            });
    };


    useEffect(() => {
        if(authorized) {
            fetchProfile();
        }
    }, [authorized]);

    function handleLogout() {
        fetch("https://wovie-backend.onrender.com/auth/logout", {
            method: "POST",
            credentials: 'include'
        }).then(res => {
            if (res.ok) {
                logout();
            } else {
                console.error('Logout failed');
            }
        }).catch(error => {
            console.error('Error during logout:', error);
        });
    }


    if (!authorized) {
        return <UserLogin/>;
    }
    return (
        <div className="bg-third h-screen">
            <Navbar/>
            <div className="h-screen flex flex-col items-center justify-center">
                <p className="text-xl font-semibold text-wovie">
                    {profile ? `Hi ${profile.username}, schön dich zu sehen!` : 'Hi there!'}
                </p>
                <button onClick={handleLogout}
                        className="bg-white hover:border-wovie text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded shadow">
                    Logout
                </button>
            </div>
        </div>

    );
}