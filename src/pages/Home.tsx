import Navbar from "../components/Navbar.js";
import wave from "../assets/wavyBackground.svg";
import pin from "../assets/pin.svg";
import wheel from "../assets/wheel.svg";
import {useNavigate} from "react-router-dom";
import trashcanYellow from '/trashcanYellow.png';
import {useEffect, useState} from "react";
import HomeMobile from "./HomeMobile.tsx";


export default function Home() {

    const nav = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobileOrTablet = windowWidth < 1025;

    return (
        <>

            <div className="bg-white h-[100vh] overflow-x-clip">
                {!isMobileOrTablet &&
                    <Navbar/>
                }
                {isMobileOrTablet && <HomeMobile></HomeMobile>}
                {!isMobileOrTablet &&
                    <div className="h-[100vh] mt-[0vh] z-10 relative">
                        <div className="h-[18vh] xl:h-[0vh] w-full"></div>
                        <div className="h-[82vh] w-full">
                            <img alt="wavy orange background"
                                 className="object-cover w-full h-auto top-[0px] md:top-[0px] lg:top-[0px] xl:top-[0px]" src={wave}/>
                        </div>
                        <div className="absolute top-[38vh] xl:top-[30vh] ml-[12.5vw] flex-col text-third justify-items-center text-center">
                            <p className="font-bold text-[4vw] w-[30vw] text-center">Finde Container in deiner Nähe</p>
                            <button
                                className="mt-[5vh] h-[6vw] -ml-[1vw] w-[15vw] bg-third rounded-full text-[2vw] text-amber-50"
                                onClick={() => nav('/map')}>Zur Karte
                            </button>
                            </div>
                        <img className="absolute h-[18vw] top-[37vh] xl:top-[22vh] left-[74.3vw]" src={pin}/>
                        <img className="absolute h-[26vw] top-[60vh] xl:top-[50vh] left-[70.3vw]" src={trashcanYellow}/>
                        </div>
                        }
                    </div>
                    </>
                    )
                }

