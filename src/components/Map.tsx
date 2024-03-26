import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-extra-markers';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css';
import 'leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js';


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

type MapProps = {
    containers: Container[],
}

export default function Map({containers} : MapProps) {

    const getMarkerColor = (wasteType: string) => {
        switch (wasteType) {
            case 'paperWaste':
                return 'red';
            case 'organicWaste':
                return '#6F4E37';
            case 'metalWaste':
                return 'black';
            case 'glassWaste':
                return 'green';
            case 'plasticWaste':
                return 'yellow';
            default:
                return 'blue';
        }
    };

    type MarkerColor =
        "black"
        | "green"
        | "yellow"
        | "blue"
        | "red"
        | "orange-dark"
        | "orange"
        | "blue-dark"
        | "cyan"
        | "purple"
        | "violet"
        | "pink"
        | "green-dark"
        | "green-light"
        | "white"
        | `#${string}`;

    const createMarkerIcon = (color: MarkerColor) => {
        return L.ExtraMarkers.icon({
            icon: 'fa-circle',
            markerColor: color,
            svg: true,
            shape: 'circle',
            prefix: 'fa'
        });
    };

    const longitudeIncrement = 0.00005;

    return (
        <MapContainer className="h-[68vh] w-[90vw]" center={[48.208492, 16.373127]} zoom={13}
                      scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {containers.reduce<React.ReactNode[]>((acc, container, index, array) => {
                const sameLocationContainers = array.filter(c => c.latitude === container.latitude && c.longitude === container.longitude);
                const containerIndex = sameLocationContainers.findIndex(c => c.id === container.id);
                const adjustedLongitude = container.longitude + (containerIndex * longitudeIncrement);

                const wasteType = container.organicWaste ? "organicWaste" :
                    container.plasticWaste ? "plasticWaste" :
                        container.paperWaste ? "paperWaste" :
                            container.glassWaste ? "glassWaste" :
                                container.metalWaste ? "metalWaste" : "default";
                const markerColor = getMarkerColor(wasteType);
                const icon = createMarkerIcon(markerColor);

                acc.push(
                    <Marker
                        key={container.id}
                        position={[adjustedLongitude, container.latitude]}
                        icon={icon}>
                        <Popup>
                            {container.street + " " + container.streetNumber + ", " + container.districtNumber + ". " + container.districtName}
                        </Popup>
                    </Marker>
                );

                return acc;
            }, [])}
        </MapContainer>
    );

}
