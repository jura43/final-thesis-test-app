import Head from "next/head";
import WineAtlas from "../components/WineAtlas/wine-atlas";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/6328aa0fa1610e6386309fa2"
  );
  const data = await res.json();

  return {
    props: { regions: data },
  };
}

function HomePage({ regions }) {
  return (
    <>
      <Head>
        <title>Wineata - Atlas</title>
        <meta property="og:title" content="Wineata - Atlas" key="title" />
      </Head>
      <WineAtlas regions={regions.record} />
    </>
  );
}

export default HomePage;
