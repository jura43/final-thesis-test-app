import Image from "next/future/image";
import style from "./search.module.css";
import Stopwatch from "../../public/home/icon/stopwatch-icon.svg";
import { motion } from "framer-motion";

const buttonVariant = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

function Search(props) {
  return (
    <div id={style.search}>
      <div id={style.wrap}>
        <Image src={props.src} alt={props.alt} className={style.image} fill />
      </div>
      <p id={style.text}>{props.text}</p>
      <div id={style.time}>
        <p>
          <Stopwatch id={style.stopwatch} />
          {props.time}
        </p>
        <motion.button
          id={style.button}
          variants={buttonVariant}
          whileHover="hover"
        >
          Learn more
        </motion.button>
      </div>
    </div>
  );
}

export default Search;
