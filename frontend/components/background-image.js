import Image from "next/future/image";
import style from "./background-image.module.css";

function BackgroundImage(props) {
  return (
    <>
      <div className={style.overlay} />
      <div className={style.bgWrap}>
        <Image
          className={style.image}
          src={props.src}
          onLoadingComplete={props.onLoadingComplete}
          alt="background"
          fill
          priority
        />
      </div>
    </>
  );
}

export default BackgroundImage;
