import { Container, Row, Col } from "react-bootstrap";
import Item from "./item";
import Filter from "./filter";
import style from "./shop.module.scss";

function Shop(props) {
  return (
    <Container fluid className={style.background}>
      <Row>
        <Col lg={2} id={style.filter}>
          <Filter />
        </Col>
        <Col lg={10} id={style.items}>
        {props.props.map((item) => (
            <Item
              key={item.ItemID}
              name={item.name}
              winery={item.winery}
              quantity={item.quantity}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
