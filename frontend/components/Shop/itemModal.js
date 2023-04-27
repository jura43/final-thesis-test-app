import Image from "next/future/image";
import style from "./itemModal.module.css";
import data from "../../utils/data";

function ItemModal(props) {
  const product = data.products.find((product) => product.name === props.name);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={style.content}>
      <h1 className={style.name}>{product.name}</h1>
      <Image
        src={product.image}
        alt="item_image"
        width={500}
        height={500}
        objectFit="contain"
      />
      <h2>{product?.price.toFixed(2)} €</h2>
      <div className={style.info}>
        <p className={style.category}>Type of wine: </p>
        <p className={style.inline}> {product.type}</p>
      </div>

      <div className={style.info}>
        <p className={style.category}>Region: </p>
        <p className={style.inline}>{product.region}</p>
      </div>
      <div className={style.info}>
        <p className={style.category}>Volume: </p>
        <p className={style.inline}>{product.volume}</p>
      </div>
    </div>
  );
}

export default ItemModal;
