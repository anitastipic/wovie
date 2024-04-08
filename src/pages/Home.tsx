import {useNavigate} from "react-router-dom";
import map1 from "../../public/map_sequence/map1.png";
import map2 from "../../public/map_sequence/map2.png";
import map3 from "../../public/map_sequence/map3.png";
import scrollIcon from "../assets/scroll-down.svg";
import {useEffect} from "react";



export default function Home() {
    const nav = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;
            const fadeStart2 = 0;
            const fadeStart3 = 350;
            const fadeDistance = 400;

            const images = document.querySelectorAll('#scrollContainer img');

            images.forEach((img, index) => {
                const element = img as HTMLElement;
                let opacity = 1;

                if (index === 1) { // Second image
                    opacity = Math.min(1, Math.max(0, (scrollTop - fadeStart2) / fadeDistance));
                } else if (index === 2) { // Third image
                    opacity = Math.min(1, Math.max(0, (scrollTop - fadeStart3) / fadeDistance));
                }

                element.style.opacity = opacity.toString();
            });
        };


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className="overflow-x-clip scroll-smooth">
                <div className="z-10 h-[200vh] w-full relative top-[18vh] left-[0vw]">
                    <div className="h-[100vh] w-full fixed">
                        <div id="scrollContainer" className="h-[30vh] w-[80vw] sm:h-[40vh] sm:w-[40vw] absolute top-[25vh] left-[10vw] sm:top-[20vh] sm:left-[50vw]">
                            <img
                                className="absolute shadow-slate-500 shadow-xl border-slate-400 border-2 rounded-md h-[30vh] sm:h-[40vh] w-auto object-cover"
                                src={map1}/>
                            <img
                                className="absolute border-slate-400 border-2 rounded-md h-[30vh] sm:h-[40vh] w-auto object-cover"
                                src={map2}/>
                            <img
                                id={"finalImg"}
                                className="absolute border-slate-400 border-2 rounded-md h-[30vh] sm:h-[40vh] w-auto object-cover"
                                src={map3}/>
                        </div>
                        <div
                            className="leading-[3rem] sm:leading-[3.5rem] text-center sm:text-left z-20 w-[60vw] sm:w-[25vw] text-third text-3xl sm:text-[5vh] font-extrabold absolute top-[5vh] left-[20vw] sm:top-[30vh] sm:left-[8vw]">
                            <p>Finde Container in deiner Nähe</p>
                        </div>
                        <img alt={"scroll down icon"} src={scrollIcon} className="opacity-50 animate-bounce h-auto w-[11vw] sm:w-[3vw] absolute top-[69vh] sm:top-[75vh] left-[44.5vw]"/>
                    </div>
                </div>
                <div className="h-[87vh] w-full bg-white absolute top-[220vh] z-10 content-center text-center">
                    <p className="text-third font-bold text-3xl">WoVie - Wo und Wie recyceln in Wien</p>
                    <button
                        className="mt-8 hover:text-wovie shadow-slate-700 shadow-md px-6 py-4 bg-third rounded-full text-[2.5vh] font-bold text-amber-50"
                        onClick={() => nav('/map')}>Zur Karte
                    </button>
                </div>
            </div>
        </>
    );
}