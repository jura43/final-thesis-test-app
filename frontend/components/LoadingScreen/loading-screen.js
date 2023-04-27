import Image from "next/future/image";
import style from "./loading-screen.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const loadingVariant = {
  maximize: {
    opacity: 1,
  },
  minimize: {
    opacity: 0,
  },
  rotate: {
    rotate: [0, 360],
    scale: 1.1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.75,
      repeatDelay: 0.5,
    },
  },
};

function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div className={style.loading} variants={loadingVariant}>
        <motion.div variants={loadingVariant} whileInView="rotate">
          <Image
            src="/favicon.ico"
            alt="loading_icon"
            width={100}
            height={100}
            layout="fixed"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoadingScreen;
