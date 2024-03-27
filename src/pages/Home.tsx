import Navbar from "../components/Navbar.js";
import pin from "../assets/pin.svg";
import {useNavigate} from "react-router-dom";
import trashcanYellow from '/trashcanYellow.png';
import Curve from "../components/Curve.tsx";


export default function Home() {

    const nav = useNavigate();
    return (
        <>
            <div className="overflow-x-clip bg-wovie">
                <Navbar/>
                <div className="h-[100vh] z-10 relative bg-wovie">
                    <Curve></Curve>
                    <div className="sm:flex-none flex flex-col items-center">
                        <div
                            className="w-[35vh] sm:w-[50vh] z-20 absolute top-[18vh] sm:top-[35vh] left-[11vw] sm:left-[-5vw] md:left-[6vw] xl:top-[35vh] flex-col text-third justify-items-center text-center">
                            <p className="text-shadow-wovie font-bold text-[4.5vh] md:text-[5.5vh] text-center">Finde
                                Container in deiner Nähe</p>
                        </div>
                        <button
                            className="shadow-slate-500 shadow-md absolute top-[77vh] left-[30vw] sm:left-[11vw] h-[9vh] sm:h-[6vw] w-[40vw] sm:w-[15vw] bg-third rounded-full text-[2.5vh] sm:text-[2vw] text-amber-50"
                            onClick={() => nav('/map')}>Zur Karte
                        </button>
                        <img className="absolute h-[18vw] top-[25vh] xl:top-[22vh] left-[74.3vw] invisible sm:visible"
                             src={pin}/>
                        <img className="absolute h-[26vw] top-[50vh] xl:top-[50vh] left-[70.3vw] invisible sm:visible"
                             src={trashcanYellow}/>
                        <img className="visible sm:invisible h-[30vh] z-20 absolute top-[40vh]" src={trashcanYellow}/>
                    </div>
                </div>
            </div>
        </>
    )
}

