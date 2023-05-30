import { motion } from "framer-motion";
import styles from "../styles";
import { ReactNode } from "react";
import { container, child } from "../utils/motion";

const MotionSummText = ({ text }: { text: string }) => {
  const words: string[] = text.split(" ");

  return (
    <motion.h1
      className={`${styles.heroHeadText} flex flex-wrap justify-center gap-2`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number): ReactNode => {
        return (
          <motion.span
            variants={child}
            className={index > 1 ? "text-[#A5D7E8]" : "text-white"}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default MotionSummText;
