import React, { useState } from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";
import icon from "../constants/constants";

function MarkerLayer() {
    const [markers, setMarkers] = useState([[20.5937, 78.9629]]);

    // Custom hook to handle map clicks and add markers
    const AddMarkerOnClick = () => {
        const map = useMapEvents({
            click: (e) => {
                    const { lat, lng } = e.latlng;
                    setMarkers((prevMarkers) => [...prevMarkers, [lat, lng]]); // React provides previous state in setstate function thus prevMarkers automatically defines the previous state markers
                    console.log(markers);

            },
        });

        return null;
    }

    function showMarkers() {
        return markers.map((marker, index) => (
            <Marker key={index} position={marker} icon={icon}>
                <Popup>
                    {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                    Marker {index}
                </Popup>
            </Marker>
        ));
    }

    return (
        <>
            <AddMarkerOnClick />
            {showMarkers()}
        </>
    );
}

export default MarkerLayer;
