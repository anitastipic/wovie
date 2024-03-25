import {useNavigate} from "react-router-dom";

export default function HomeMobile() {
    const nav = useNavigate();

    return (
        <div className="h-[100vh] bg-third flex justify-center items-center">
            <button
                className="h-[20vw] w-[50vw] bg-wovie rounded-full text-[8vw] text-amber-50"
                onClick={() => nav('/map')}>Zur Karte
            </button>
        </div>
    )
}