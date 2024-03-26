import React from "react";

type District = {
    id: number,
    districtName: string,
    districtNumber: number
};

type MapSideBarProps = {
    districts: District[];
    handleDistrictChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleWasteTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    selectedDistrict: string | null;
    isLoading: boolean;
};
export default function MapFilterSection({
                                             districts,
                                             handleDistrictChange,
                                             selectedDistrict,
                                             handleWasteTypeChange,
                                             handleSubmit,
                                             isLoading
                                         }: MapSideBarProps) {
    const wasteTypes = [{
        english: "organicWaste",
        german: "BIO"
    }, {english: "plasticWaste", german: "Verpackung"}, {english: "glassWaste", german: "Glas"}];

    return (
        <form className="py-4 md:py-2 px-4 shadow-slate-300 shadow-lg border sm:rounded-full w-[90vw] flex flex-col sm:flex-row items-start sm:items-center"
              onSubmit={handleSubmit}>
            <select className="shadow-lg shadow-slate-300 h-[4vh] rounded-full bg-wovie pl-2 text-[2.3vh] text-third w-[55vw] sm:w-[25vw]"
                    onChange={handleDistrictChange}
                    value={selectedDistrict || ''}>
                <option className="" value="">Wähle einen Bezirk</option>
                {isLoading &&
                    <option>Districts Loading...</option>}
                {districts.map(district => (
                    <option key={district.id} value={district.districtName}>{district.districtName}</option>
                ))}
            </select>
            <div className="h-[17vh] sm:h-[5vh] items start sm:items-center flex flex-col sm:flex-row mt-[0.5vh] sm:mt-[0vh] md:ml-[2.5vw] py-[2vh] sm:py-[0vh]">
                {wasteTypes.map(({english, german}, index) => {
                    const color = english == "organicWaste" ? "#924C1A" :
                        english == "plasticWaste" ? "#FDE306" :
                            english == "glassWaste" ? "#2F5924" : "third";

                    return (<div key={index} className="flex items-center text-third ml-4">
                        <input onChange={handleWasteTypeChange} type="checkbox" className="border-2 mr-2 shadow-slate-300 shadow-md"
                               value={english}/>
                        <label
                            className="text-[2.3vh] mr-2">{german}</label>
                        <div style={{backgroundColor: color}}
                             className="rounded-full h-[2vh] w-[2vh] shadow-slate-300 shadow-sm"></div>
                    </div>);
                })}
                <button type="submit"
                        className="shadow-slate-300 shadow-md md:mr-4 bg-wovie rounded-full px-5 md:px-6 py-1 text-center mt-[0.5vh] ml-0 md:mt-[0] sm:ml-[2.5vw] text-third font-semibold">LOS!
                </button>
            </div>
        </form>
    )
}