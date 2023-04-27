import Head from "next/head";
import Mapbox from "../components/Map/mapbox";

function Map() {
  return (
    <>
      <Head>
        <title>Wineata - Map</title>
        <meta property="og:title" content="Wineata - Map" key="title" />
      </Head>
      <Mapbox />
    </>
  );
}

export default Map;
