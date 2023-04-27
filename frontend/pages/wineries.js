import Head from "next/head";
import Wineries from "../components/Wineries/wineries";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/63a04b4401a72b59f2345f4c"
  );
  const res1 = await fetch(
    "https://api.jsonbin.io/v3/b/63948d0c6a51bc4f704c0044"
  );
  const data = await res.json();
  const counties = await res1.json();
  return {
    props: { wineries: data, counties: counties },
    revalidate: 30,
  };
}

export default function WineriesPage({ wineries, counties }) {
  const router = useRouter();
  let route;
  let selectedCounties = [];

  if (!!router.query.county) {
    if (Array.isArray(router.query.county)) {
      route = [...router.query.county];
    } else {
      route = [router.query.county];
    }
    route = route.map((number) => parseInt(number, 10));
    selectedCounties = wineries.record.wineries.filter((winery) =>
      route.includes(winery.county)
    );
  } else {
    selectedCounties = wineries.record.wineries;
  }

  return (
    <>
      <Head>
        <title>Wineata - Wineries</title>
        <meta property="og:title" content="Wineata - Wineries" key="title" />
      </Head>
      <Wineries
        wineries={selectedCounties}
        counties={counties.record.counties}
      />
    </>
  );
}
