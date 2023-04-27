import style from "./item.module.scss";

function Item(props) {
  return (
    <div className={style.item}>
        <h2>{props.name}</h2>
        <h5>{props.winery}</h5>
        <h5>Quantity available: {props.quantity}</h5>
    </div>
  );
}

export default Item;
