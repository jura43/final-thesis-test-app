import style from "./info.module.css";
import InfoPicture from "./infoPicture";
import Link from "next/link";

function Info(props) {
  return (
    <div id={style.info}>
      <div id={style.infoText}>
        <h1>{props.region.title}</h1>
        <h3 className={style.county}>{props.region.county}</h3>
        <ul className={style.font}>
          <li>
            <b>Vineyard area:</b> {props.region.vineyard_area} ha
          </li>
          <li>
            <b>Number of registered producers:</b> {props.region.producers}
          </li>
          <li>
            <b>White wines:</b>
            <ul>
              {props.region.wines.white_wines.map((wine) => (
                <li key={wine}>{wine}</li>
              ))}
            </ul>
          </li>
          <li>
            <b>Red wines:</b>
            <ul>
              {props.region.wines.red_wines.map((wine) => (
                <li key={wine}>{wine}</li>
              ))}
            </ul>
          </li>
        </ul>
        <Link href={props.region.wineries}>
          <a className={style.wineries}>Check out wineries in this county →</a>
        </Link>
      </div>
      <div id={style.infoPictures}>
        {props.region.images.map((image) => (
          <InfoPicture key={image} src={image} alt={image} />
        ))}
      </div>
    </div>
  );
}

export default Info;
