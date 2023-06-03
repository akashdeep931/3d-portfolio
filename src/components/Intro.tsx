import { MotionSummText } from ".";
import Typewriter from "typewriter-effect";
import { roles } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { child, bounce } from "../utils/motion";
import styles from "../styles";
import { downArrow } from "../assets";

const Intro = () => {
  const [isSummText, setIsSummText] = useState(false);

  setTimeout(() => {
    setIsSummText(true);
  }, 500);

  return (
    <section
      className={`${styles.paddingX} relative w-full h-screen flex flex-col justify-center items-center gap-5`}
    >
      <MotionSummText text="Hi, I'm Akashdeep Singh Kaur" />
      <div className={`${isSummText ? "visible" : "invisible"}`}>
        <Typewriter
          options={{
            strings: roles,
            autoStart: isSummText,
            loop: true,
            deleteSpeed: 50,
            delay: 60,
            cursor: "_",
            wrapperClassName:
              "text-[#9DB2BF] lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[18px] lg:leading-[78px] font-medium",
            cursorClassName:
              "text-[#9DB2BF] lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[18px] lg:leading-[78px]",
          }}
        />
      </div>
      <motion.div
        className="absolute bottom-10"
        variants={child}
        initial="hidden"
        animate="visible"
      >
        <a href="#about">
          <motion.img
            transition={bounce}
            animate={{
              y: ["20%", "-20%"],
            }}
            src={downArrow}
            alt="to scroll down icon"
            className="w-[40px] h-[68px]"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
