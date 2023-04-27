import Image from "next/future/image";
import style from "./infoPicture.module.css";
import { motion } from "framer-motion";

const pictureVariant = {
  hover: {
    scale: 1.05,
  },
};

function InfoPicture(prop) {
  return (
    <motion.div
      className={style.picture}
      variants={pictureVariant}
      whileHover="hover"
      whileTap="hover"
    >
      <Image
        src={prop.src}
        alt={prop.alt}
        width={350}
        height={230}
        layout="intrinsic"
      />
    </motion.div>
  );
}

export default InfoPicture;
