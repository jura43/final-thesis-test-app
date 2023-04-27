import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import Loading from "../components/LoadingScreen/loading";
import { useEffect } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SSRProvider>
      <Layout>
        <Loading />
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
