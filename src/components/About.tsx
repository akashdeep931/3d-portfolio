import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import styles from "../styles";
import { ComputerCanvas } from "./3D_models";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <motion.section
      className="relative w-full h-screen mx-auto overflow-y-hidden"
      variants={textVariant()}
    >
      <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionSubText} mt-4 max-w-3xl leading-[30px] text-justify`}
      >
        I am a Junior Software Developer currently based in Birmingham with
        insights in JavaScript, TypeScript, React.js, Vue.js, Ionic, Capacitor,
        Node.js, Express.js, Jest, PostgreSQL, Firebase, CSS, HTML5.
        Nevertheless, I am not limited to this tech stack and also learning C#,
        .NET, ASP.NET and Python. Check my contributions here:&nbsp;
        <a
          className="text-white hover:text-[#A5D7E8]"
          href="https://github.com/akashdeep931"
          target="_blank"
        >
          https://github.com/akashdeep931.
        </a>
        &nbsp;&#128187;&nbsp;&#128187;
        <br /> <br />
        Challenges lover, never give up, motivated to learn new things every
        day, and keep growing in the tech field.
      </motion.p>
      <ComputerCanvas />
    </motion.section>
  );
};

export default SectionWrapper(About, "about");
