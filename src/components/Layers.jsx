import { React, useEffect, useRef } from "react";
import { LayersControl, LayerGroup, LayerGroupProps, LayersControlProps, Marker, Popup, Polyline, CircleMarker, GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import india_country from "../data/india.geo.json"
import india_state from "../data/india_state.geo.json"
import india_city from "../data/india_city.geo.json"
import india_taluka from "../data/india_taluk.geo.json"


import MarkerLayer from "./MarkerLayer";

function Layers(){


    return(
        <LayersControl position="topright">
            <LayersControl.Overlay name="Markers Layer">

                    <MarkerLayer />
                
            </LayersControl.Overlay>

            <LayersControl.Overlay name = "India Border">            

             <GeoJSON data={india_country} style={{ color: 'orange', weight: 1 }} />

            </LayersControl.Overlay>

            <LayersControl.Overlay name = "India State Border">            

             <GeoJSON data={india_state} style={{ color: 'black', weight: 1 }} />

            </LayersControl.Overlay>

            <LayersControl.Overlay name = "India City Border">            

             <GeoJSON data={india_city} style={{ color: 'blue', weight: 1 }} />

            </LayersControl.Overlay>

            <LayersControl.Overlay name = "India Taluka Border">            

             <GeoJSON data={india_taluka} style={{ color: 'green', weight: 1 }} />

            </LayersControl.Overlay>

            

        </LayersControl>
    )     
}

export default Layers;
