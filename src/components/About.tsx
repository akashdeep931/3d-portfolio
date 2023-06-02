import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import styles from "../styles";
import { ComputerCanvas } from "./3D_models";
import { SectionWrapper } from "../hoc";
import { useState } from "react";

const About = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = (): void => {
    setIsGrabbing(true);
  };

  const handleMouseUp = (): void => {
    setIsGrabbing(false);
  };

  return (
    <motion.section
      className="relative w-full mx-auto"
      variants={textVariant()}
    >
      <div className="abosulte m-0">
        <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText} mt-4 max-w-3xl leading-[30px] text-justify`}
        >
          I am a Junior Software Developer currently based in Birmingham with
          insights in JavaScript, TypeScript, React.js, Vue.js, Vite,js,
          Three.js, Ionic, Capacitor, Node.js, Express.js, Jest, PostgreSQL,
          Firebase, CSS, HTML5. Nevertheless, I am not limited to this tech
          stack and also learning C#, .NET, ASP.NET and
          Python.&nbsp;&#128187;&nbsp;&#128187;
          <br /> <br />
          Challenges lover, never give up, motivated to learn new things every
          day, and keep growing in the tech field.
        </motion.p>
      </div>
      <div
        className={`${
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        } relative h-[200px] sm:h-[300px] lg:h-[600px]`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <ComputerCanvas />
      </div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");
