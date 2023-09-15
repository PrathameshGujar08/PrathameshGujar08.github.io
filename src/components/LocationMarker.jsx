import { React, useState, useEffect } from "react";
import { useMap, Marker, Popup, useMapEvents} from "react-leaflet";
import icon from "../constants/constants";
import curr_loc from "../resources/curr_loc.png"

function LocationMarker(){
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const handleClick=()=>{
    map.locate();
  }
  return <>
    <button id="locatebtn" onClick={handleClick}> <img src={curr_loc} height={35} width={35}></img></button>
    { position === null ? null : (
        <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
        </Marker>
   )

    }
  </>
}

export default LocationMarker;