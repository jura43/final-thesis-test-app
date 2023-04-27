import Head from "next/head";
import RegisterForm from "../components/Forms/register-form";
import BackgroundImage from "../components/background-image";
import LoadingScreen from "../components/LoadingScreen/loading-screen";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function RegisterPage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Wineata - Register</title>
        <meta property="og:title" content="Wineata - Register" key="title" />
      </Head>
      {loading && <LoadingScreen />}
      <BackgroundImage
        onLoadingComplete={() => setLoading(false)}
        src="/bg2.jpg"
      />
      <Container fluid>
        <Row>
          <Col></Col>
          <RegisterForm />
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterPage;
