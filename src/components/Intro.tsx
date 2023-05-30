import { MotionSummText } from ".";
import Typewriter from "typewriter-effect";
import { roles } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { child } from "../utils/motion";

const Intro = () => {
  const [isSummText, setIsSummText] = useState(false);

  setTimeout(() => {
    setIsSummText(true);
  }, 500);

  return (
    <section
      className={`${styles.paddingX} h-screen flex flex-col justify-center items-center gap-5`}
    >
      <MotionSummText text="Hi, I'm Akashdeep Singh Kaur" />
      <Typewriter
        options={{
          strings: roles,
          autoStart: isSummText,
          loop: true,
          deleteSpeed: 50,
          delay: 60,
          cursor: "_",
          wrapperClassName: `${
            isSummText ? "visible" : "invisible"
          } text-[#9DB2BF] lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[78px] font-medium`,
          cursorClassName: `${
            isSummText ? "visible" : "invisible"
          } text-[#9DB2BF] lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[78px]`,
        }}
      />
    </section>
  );
};

export default Intro;
