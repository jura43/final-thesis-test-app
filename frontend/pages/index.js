import Head from "next/head";
import Home from "../components/Home/home";

function HomePage() {
  return (
    <>
      <Head>
        <title>Wineata</title>
        <meta property="og:title" content="Wineata" key="title" />
      </Head>
      <Home />
    </>
  );
}

export default HomePage;
