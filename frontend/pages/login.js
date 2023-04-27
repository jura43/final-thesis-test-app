import Head from "next/head";
import LoginFrom from "../components/Forms/login-from";
import BackgroundImage from "../components/background-image";
import { Container, Row, Col } from "react-bootstrap";
import LoadingScreen from "../components/LoadingScreen/loading-screen";
import { useState } from "react";

function LoginPage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Wineata - Login</title>
        <meta property="og:title" content="Wineata - Login" key="title" />
      </Head>
      {loading && <LoadingScreen />}
      <BackgroundImage
        onLoadingComplete={() => setLoading(false)}
        src="/bg1.jpg"
      />
      <Container fluid>
        <Row>
          <Col></Col>
          <LoginFrom />
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
