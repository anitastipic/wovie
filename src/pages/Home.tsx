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

            <div className="bg-third h-[100%] overflow-x-clip">
                {!isMobileOrTablet &&
                    <Navbar/>
                }
                {isMobileOrTablet && <HomeMobile></HomeMobile>}
                {!isMobileOrTablet &&
                    <div className="h-[100vh] mt-[0vh] z-10 relative bg-white">
                        <img alt="wavy orange background" className="absolute top-0" src={wave}/>
                        <div className="absolute top-[20vw] ml-[12.5vw]">
                            <p className="text-third font-bold text-[4vw] ">Finde Container</p>
                            <p className="text-third font-bold text-[4vw]">in deiner Nähe</p>
                        </div>
                        <img className="absolute h-[18vw] top-[13vw] left-[74.3vw]" src={pin}/>
                        <img className="absolute h-[26vw] top-[30vw] left-[70.3vw]" src={trashcanYellow}/>
                        <button
                            className="absolute top-[46vw] left-[17.7vw] h-[5vw] w-[15vw] bg-third rounded-full text-[2vw] text-amber-50"
                            onClick={() => nav('/map')}>Zur Karte
                        </button>
                    </div>
                }
            </div>

        </>
    )
}

