import React from 'react';
import logo from '../images/logos/WoVie-logo.png';
import profileIcon from '../../public/profile.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="z-20 h-[18%] w-full px-6 py-3 flex items-center fixed justify-between bg-white">
            <Link to="/" className="flex h-auto w-[14vh] justify-center">
                <img src={logo} alt="Logo" className="object-contain"/>
            </Link>
            <div className="flex justify-center items-center h-[13vh]">
                <div className="flex justify-end w-auto text-third">
                    <Link to="/map"
                          className=" text-lg font-semibold transition-colors duration-300 transform hover:text-wovie mx-3"
                    >Karte</Link>
                    <Link to="/recycling-1-0-1" className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                       >Recycling 1 - 0 - 1</Link>
                    <Link to="/über-uns" className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                    >Über uns</Link>
                    <Link to="/kontakt" className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                    >Kontakt</Link>
                </div>
                <Link to="/hero" className=" h-[6.5vh] flex w-auto ml-7">
                    <img src={profileIcon} alt="Hero" className="object-contain"/>
                </Link>
            </div>
        </nav>
    );
}