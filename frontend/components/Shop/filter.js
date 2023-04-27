import { Form } from "react-bootstrap";
import style from "./filter.module.scss";

function Filter(props) {
  return (
    <div id={style.filter}>
      <h2>Filter</h2>
      <div id={style.regions}>
        <p className={style.filterTitle}>Regions</p>
        <Form.Check type="checkbox" label="Grad Zagreb" />
        <Form.Check type="checkbox" label="Zagorje" />
        <Form.Check type="checkbox" label="Slavonija" />
        <Form.Check type="checkbox" label="Istra" />
        <Form.Check type="checkbox" label="Dalmacija" />
        <Form.Check type="checkbox" label="Međimurje" />
      </div>
      <div id={style.regions}>
        <p className={style.filterTitle}>Type of wine</p>
        <Form.Check type="checkbox" label="White wine" />
        <Form.Check type="checkbox" label="Red wine" />
        <Form.Check type="checkbox" label="Rose wine" />
        <Form.Check type="checkbox" label="Orange wine" />
        <Form.Check type="checkbox" label="Shots" />
      </div>
      <div id={style.price}>
        <p className={style.filterTitle}>Price</p>
        <div className={style.price}>
          <Form.Range />
        </div>
      </div>
    </div>
  );
}

export default Filter;
