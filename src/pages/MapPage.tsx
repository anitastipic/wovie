import { useState, useEffect } from 'react';
import Map from "../components/Map.tsx";
import Navbar from "../components/Navbar.tsx";

export default function MapPage() {
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
    const className = isMobileOrTablet ? "invisible" : "visible"

    return (
        <div className="bg-white h-screen w-full scroll-m-0">
                <div className={className}>
                    <Navbar></Navbar>
                </div>
            <div className="pt-[3vh] md:pt-[20vh] w-full">
                <Map/>
            </div>
        </div>
    )
}
