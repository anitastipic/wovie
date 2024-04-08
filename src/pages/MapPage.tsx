import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.tsx";
import MapFilterSection from "../components/MapFilterSection.tsx";
import Map from "../components/Map.tsx";

type Container = {
    id: number,
    latitude: number,
    longitude: number,
    districtNumber: number,
    districtId: number,
    districtName: string,
    street: string,
    streetNumber: string,
    paperWaste: boolean,
    organicWaste: boolean,
    metalWaste: boolean,
    glassWaste: boolean,
    plasticWaste: boolean
};

type District = {
    id: number,
    districtName: string,
    districtNumber: number
};

export default function MapPage() {
    const [containers, setContainers] = useState<Container[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [selectedWasteTypes, setSelectedWasteTypes] = useState({paperWaste:false, glassWaste: false, organicWaste:false, plasticWaste: false})
    const [isLoading, setIsLoading] = useState(true);

    const fetchDistricts = () => {
        return fetch("https://wovie-backend.onrender.com/district")
            .then((res) => res.json())
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchDistricts().then(setDistricts);
    }, []);

    const fetchFilteredContainers = () => {
        const enabledWasteTypes = Object.entries(selectedWasteTypes)
            .filter(([_, value]) => value)
            .map(([key, _]) => key);

        const queryParams = new URLSearchParams();
        enabledWasteTypes.forEach(type => queryParams.append("wasteTypes", type));
        if (selectedDistrict) queryParams.set("districtName", selectedDistrict);

        const fetchURL = `https://wovie-backend.onrender.com/container/filter?${queryParams.toString()}`;
        return fetch(fetchURL)
            .then(res => res.json())
    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const districtName = event.target.value;
        setSelectedDistrict(districtName);
    };

    const handleWasteTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.value;
        const isChecked = event.target.checked;
        setSelectedWasteTypes(prev => ({
            ...prev,
            [key]: isChecked,
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchFilteredContainers().then((res: Container[]) => {
            setContainers(res);
        }).catch((error) => {
            console.error("Failed to fetch containers:", error);
        });
    }

    return (
        <div className="bg-white h-screen w-full scroll-m-0">
            <div className="pt-[15vh] md:pt-[20vh] w-full">
                <div className="flex flex-col items-center h-[84%] bg-white">
                    <MapFilterSection
                        districts={districts}
                        selectedDistrict={selectedDistrict}
                        handleDistrictChange={handleDistrictChange}
                        handleWasteTypeChange={handleWasteTypeChange}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}/>
                    <div id="map" className="mt-[2vh] sm:mt-4 border-[3.5px] border-wovie rounded-md shadow-slate-500 shadow-2xl">
                        <Map containers={containers}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
