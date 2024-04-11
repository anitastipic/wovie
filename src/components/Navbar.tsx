import React, {useEffect, useState} from 'react';
import logo from '../images/logos/WoVie-logo.png';
import profileIcon from '../../public/profile.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobileOrTablet = windowWidth < 700;

    function handleSideBar() {
        setSideBarIsVisible(!sideBarIsVisible);
    }

    return (
        <>{isMobileOrTablet &&
            <nav className="">
                <div className="fixed z-30 bg-white shadow-slate-300 shadow-sm h-[13vh] w-full pl-6 py-3 flex items-center
                justify-between">
                    <Link to="/" className="flex h-auto w-[9vh] flex-shrink-0 justify-center">
                        <img src={logo} alt="Logo" className="object-contain"/>
                    </Link>
                    <div className="ml-auto mr-6 flex w-[25vw] justify-between items-center">
                        <Link to="/hero" className=" h-[5vh] flex">
                            <img src={profileIcon} alt="Hero" className="object-contain"/>
                        </Link>
                        <p onClick={() => handleSideBar()} className="text-third font-bold">Menü</p>
                    </div>
                </div>
                {sideBarIsVisible &&
                    <div
                        className="bg-white shadow-slate-300 shadow-lg absolute top-[13vh] right-0 text-center pr-2 h-[24vh] w-[45vw] text-third">
                        <div className="h-[6vh] shadow-slate-300 shadow-sm content-center">
                            <Link to="/map"
                                  className="text-lg font-semibold transition-colors duration-300 transform hover:text-wovie mx-3"
                            >Karte</Link>
                        </div>
                        <div className="h-[6vh] content-center shadow-slate-300 shadow-sm">
                            <Link to="/recycling-1-0-1"
                                  className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                            >Recycling 1 - 0 - 1</Link>
                        </div>
                        <div className="h-[6vh] content-center shadow-slate-300 shadow-sm">
                            <Link to="/über-uns"
                                  className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                            >Über mich</Link>
                        </div>
                    </div>
                }
            </nav>}
            {!isMobileOrTablet &&
                <nav
                    className="shadow-slate-300 shadow-sm z-20 h-[18%] w-full px-6 py-3 flex items-center fixed justify-between bg-white">
                    <Link to="/" className="flex h-auto w-[14vh] justify-center">
                        <img src={logo} alt="Logo" className="object-contain"/>
                    </Link>
                    <div className="flex justify-center items-center h-[13vh]">
                        <div className="flex justify-end w-auto text-third">
                            <Link to="/map"
                                  className=" text-lg font-semibold transition-colors duration-300 transform hover:text-wovie mx-3"
                            >Karte</Link>
                            <Link to="/recycling-1-0-1"
                                  className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                            >Recycling 1 - 0 - 1</Link>
                            <Link to="/über-uns"
                                  className=" font-semibold text-lg transition-colors duration-300 transform hover:text-wovie mx-3"
                            >Über mich</Link>
                        </div>
                        <Link to="/hero" className=" h-[6.5vh] flex w-auto ml-7">
                            <img src={profileIcon} alt="Hero" className="object-contain"/>
                        </Link>
                    </div>
                </nav>
            }
        </>
    );
}