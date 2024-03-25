import Navbar from "../components/Navbar.tsx";

export default function InProgress() {
    return(
        <div className="bg-white h-[100vh]">
            <Navbar/>
            <div className="h-[100vh] items-center text-center content-center">
                <p className="text-[6vh] text-third font-bold">Coming soon...</p>
            </div>
        </div>
    )
}