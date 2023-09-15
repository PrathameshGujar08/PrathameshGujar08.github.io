import { React } from "react";
import { useMap, Polygon } from "react-leaflet";

function ShowBorder(){
    // const map = useMap();
    const purpleOptions = { color: 'purple' }
    const multiPolygon = [
        [
          [51.51, -0.12],
          [51.51, -0.13],
          [51.53, -0.13],
        ],
        [
          [51.51, -0.05],
          [51.51, -0.07],
          [51.53, -0.07],
        ],
      ]

      return <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
    
}

export default ShowBorder();