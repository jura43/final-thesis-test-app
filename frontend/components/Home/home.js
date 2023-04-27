import { Container, Row, Col } from "react-bootstrap";
import HomeImage from "./image";
import Search from "./search";
import style from "./home.module.css";

function Home() {
  return (
    <Container fluid>
      <Row id={style.discover}>
        <Col id={style.info} sm={12} md={4}>
          <div>
            <h2 id={style.title}>Discover new wines and near wineries.</h2>
            <p id={style.text}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim dolor sit amet, consectetuipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqut enim ad minim.
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
        </Col>
        <Col className={style.homeCol} sm={12} md={4}>
          <HomeImage
            src="/home/map.jpg"
            buttonTitle="Check wine map"
            href="/map"
            alt="HomeImage1"
          />
        </Col>
        <Col className={style.homeCol} sm={12} md={4}>
          <HomeImage
            src="/home/wine_bottle.jpg"
            buttonTitle="Shop wines"
            href="/shop"
            alt="HomeImage1"
          />
        </Col>
      </Row>
      <Row id={style.search}>
        <Col>
          <span>
            <h1 id={style.secondTitle}>Search for events near your location</h1>
          </span>
          <span>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </span>
        </Col>
      </Row>
      <Row>
        <Col xxl={3} lg={3} md={4} xs={11} className={style.search}>
          <Search
            src="/home/search1.jpg"
            text="Winery tour in Wineary Kozlović with included lunch."
            time="3:30h"
            alt="Search1"
          />
        </Col>
        <Col xxl={3} lg={3} md={4} xs={11} className={style.search}>
          <Search
            src="/home/search2.jpg"
            text="Wine Tasting in Winery Baraka, full day event."
            time="All day"
            alt="Search2"
          />
        </Col>
        <Col xxl={3} lg={3} md={4} xs={11} className={style.search}>
          <Search
            src="/home/search3.jpg"
            text="Wine seminar in winery Tomić, learn how to make wine."
            time="2:10h"
            alt="Search3"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
