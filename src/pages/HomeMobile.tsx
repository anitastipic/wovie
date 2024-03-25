import {useNavigate} from "react-router-dom";
import logo from '../images/logos/WoVie-logo.png';

export default function HomeMobile() {
    const nav = useNavigate();

    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="grid grid-cols-1 place-items-center">
                <img src={logo} alt={"logo"} className="h-[20vh] w-auto"/>
                <button
                    className="h-[7vh] w-[30vw] mt-[7vh] bg-wovie rounded-full text-[4vw] text-amber-50"
                    onClick={() => nav('/map')}>Zur Karte
                </button>
            </div>
        </div>
    )
}