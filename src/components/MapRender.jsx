// /* eslint-disable */
import { React, useState, useEffect, Prompt , useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importing React Leaflet custom CSS

import Layers from "./Layers";
import LocationMarker from "./LocationMarker";


export const MapRender = () =>{

  return (
    <>
    {/* xxxxxxxxxxxxxxxxxxx Shows Map xxxxxxxxxxxxxxxxxxxxxxxxx */}
    <MapContainer center={[21.1458, 79.0882]} zoom={5}>

    <TileLayer 
      attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <button id="locatebtn" onClick={LocationMarker}> <img src={curr_loc} height={35} width={35}></img></button> */}
    <LocationMarker />
    {/* xxxxxxxxxxxxxxxxxxx Layer Control xxxxxxxxxxxxxxxxxxxxxxxxx */}
    <Layers />
    
   </MapContainer>
    </>
  );
}