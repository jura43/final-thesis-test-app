import { useState } from "react";
import Map from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoianVyYTQzIiwiYSI6ImNsN3h5M3UzbjAwZGczdmx3dGtwdTdvdHEifQ._kv6ROZ0R0FrTp2r_sf2hg";

function Mapbox() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: 15.97,
    latitude: 45.813,
    zoom: 7,
  });

  return (
    <Map
      initialViewState={viewport}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/jura43/cl4lacj5q001k14mws7gwfrve"
    />
  );
}

export default Mapbox;
