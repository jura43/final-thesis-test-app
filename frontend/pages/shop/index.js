import Head from "next/head";
import Shop from "../../components/Shop/shop";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://'+process.env.hostname+':5000/')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

function ShopPage({data}) {

  return (
    <>
      <Head>
        <title>Wineata - Shop</title>
        <meta property="og:title" content="Wineata - Shop" key="title" />
      </Head>
      <Shop props={data} />
    </>
  );
}

export default ShopPage;
