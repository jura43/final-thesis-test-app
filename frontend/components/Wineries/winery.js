import { motion } from "framer-motion";
import Link from "next/link";
import style from "./winery.module.scss";

const buttonVariant = {
  hover: {
    color: "#4a2a2a",
    backgroundColor: "#c4c4c4",
  },
};

// Winery card in wineries page

function Winery(props) {
  return (
    <div className={style.winerie}>
      <h2>{props.title}</h2>
      <div className={style.buttonHolder}>
        {props.filters ? (
          <Link href={props.slug + `&winery=${props.name}`} shallow>
            <motion.button
              className={style.button}
              variants={buttonVariant}
              whileHover="hover"
            >
              More info
            </motion.button>
          </Link>
        ) : (
          <Link href={`/wineries/?winery=${props.name}`} shallow>
            <motion.button
              className={style.button}
              variants={buttonVariant}
              whileHover="hover"
            >
              More info
            </motion.button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Winery;
