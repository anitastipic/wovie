import {useNavigate} from "react-router-dom";

export default function HomeMobile() {
    const nav = useNavigate();

    return (
        <div className="h-[100%] z-20 absolute top-[40%] left-[34.5vw]">
            <button
                className="h-[13vw] w-[30vw] bg-wovie rounded-full text-[4vw] text-amber-50"
                onClick={() => nav('/map')}>Zur Karte
            </button>
        </div>
    )
}