import { SectionWrapper } from "../hoc";
import { BallCanva } from "./3D_models";
import { tech, techCategories } from "../constants";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import styles from "../styles";
import { ReactNode, useEffect, useState } from "react";
import { Technologies } from "../../types/main";

const Tech = () => {
  const [typeClicked, setTypeClicked] = useState("Languages");
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [showWebGLComponents, setShowWebGLComponents] = useState(false);

  const handleMouseDown = (): void => {
    setIsGrabbing(true);
  };

  const handleMouseUp = (): void => {
    setIsGrabbing(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement: HTMLElement | null =
        document.getElementById("ball-webGL");

      if (sectionElement) {
        const sectionPosition: DOMRect = sectionElement.getBoundingClientRect();
        const isInViewport: boolean =
          sectionPosition.top < window.innerHeight &&
          sectionPosition.bottom >= -300;

        setShowWebGLComponents(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.section
        variants={textVariant()}
        className="relative w-full mx-auto"
      >
        <motion.article variants={fadeIn("down", "spring", 0.1, 1)}>
          <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
          <motion.p
            className={`${styles.sectionSubText} mt-4 max-w-3xl leading-[30px]`}
          >
            Technologies I work with (but not limited to).
          </motion.p>
        </motion.article>
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 1)}
          className="flex justify-center items-center mt-[60px]"
        >
          <ul className="flex flex-row md:gap-5 gap-0 items-center justify-center p-2 rounded-3xl bg-tertiary">
            {techCategories.map((type: string): ReactNode => {
              return (
                <li
                  key={type}
                  className={`${
                    typeClicked === type ? "bg-[#27374D]" : "hover:bg-[#526D82]"
                  } xl:text-[24px] md:text-[20px] sm:text-[16px] text-[13px] cursor-pointer p-5 rounded-2xl`}
                  onClick={() => setTypeClicked(type)}
                >
                  {type}
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          id="ball-webGL"
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {tech
            .filter(
              ({ category }: { category: string }) => category === typeClicked
            )
            .map((tech: Technologies): ReactNode => {
              return (
                <div
                  className={`${
                    isGrabbing ? "cursor-grabbing" : "cursor-grab"
                  } mt-[60px] w-28 h-28`}
                  key={tech.name}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  {showWebGLComponents && <BallCanva icon={tech.icon} />}
                  <p className="text-center">{tech.name}</p>
                </div>
              );
            })}
        </motion.div>
      </motion.section>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
