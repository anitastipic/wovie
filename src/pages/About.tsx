import linkedIn from "../assets/linkedin-logo.svg";
import github from "../assets/github-logo.svg";

export default function About() {
    return (
        <div className="h-screen flex justify-center items-center sm:pt-[13vh]">
            <div className="max-w-3xl w-full">
                <div className="relative w-full pb-[56.25%]">
                    <iframe className="absolute inset-0 w-full h-full border shadow-slate-500 shadow-xl"
                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7174348127959715840?compact=1"
                            title="Eingebetteter Beitrag"></iframe>
                </div>
            </div>
        </div>
    )
}
