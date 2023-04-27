import Image from "next/future/image";
import style from "./wineryModal.module.css";
import Head from "next/head";

// Shows winery informations in modal

function WineryModal(props) {
  if (!props.winery) return <div>Loading...</div>;
  if (!!props.counties) {
    let county = props.counties.find(
      (county) => county.id === props.winery.county
    );
    return (
      <>
        <Head>
          <title>Wineata - {props.winery.title}</title>
          <meta property="og:title" content={props.winery.title} key="title" />
        </Head>
        <div className={style.modal}>
          <h1 className={style.title}>{props.winery.title}</h1>
          <h3 className={style.county}>{county.name}</h3>
          <h4 className={style.aboutTitle}>About Us</h4>
          <p className={style.about}>{props.winery.about}</p>
          <h4 className={style.winesTitle}>Wines</h4>
          <ul>
            {props.winery.wines.map((wine) => (
              <li key={wine}>{wine}</li>
            ))}
          </ul>
          <h4 className={style.linkTitle}>Links</h4>
          {props.winery.website && (
            <div>
              <a href={props.winery.website} target="_blank" rel="noreferrer">
                Website ⧉
              </a>
            </div>
          )}
          {props.winery.social && (
            <div>
              <a href={props.winery.social} target="_blank" rel="noreferrer">
                Social media ⧉
              </a>
            </div>
          )}
          {props.winery.gmaps && (
            <div>
              <a href={props.winery.gmaps} target="_blank" rel="noreferrer">
                Google Maps ⧉
              </a>
            </div>
          )}
        </div>
      </>
    );
  }
  return <div>Error occured</div>;
}

export default WineryModal;
