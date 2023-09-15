import React, { useEffect, useState } from "react";

const geolocation = () => {
    const [location, setlocation] = useState({
        loaded : false,
        coordinates : { lat : "", lng : ""}
    });

    useEffect(()=> {
        if(!("geolocation" in navigator))
    }, [])
}

export default geolocation;