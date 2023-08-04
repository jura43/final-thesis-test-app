import Head from "next/head";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://'+process.env.hostname+':5000/test')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  function ShopPage({data}) {
  
    return (
      <>
        <Head>
          <title>Wineata - Shop</title>
          <meta property="og:title" content="Wineata - Test" key="title" />
        </Head>
        <div>{data}</div>
      </>
    );
  }
  
  export default ShopPage;