import Image from "next/future/image";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./image.module.css";

const buttonVariant = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

function HomeImage(prop) {
  return (
    <>
      <div className={style.wrap}>
        <Image className={style.image} src={prop.src} alt={prop.alt} fill />
      </div>
      <Link href={prop.href}>
        <motion.button
          id={style.button}
          variants={buttonVariant}
          whileHover="hover"
        >
          {prop.buttonTitle}
        </motion.button>
      </Link>
    </>
  );
}

export default HomeImage;
