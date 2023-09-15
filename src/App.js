// /* eslint-disable */
import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { useGeolocated } from "react-geolocated";
import {MapRender} from "./components/MapRender"
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  return (
  <MapRender />
  ); 
}

export default App;
