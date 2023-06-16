import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import styles from "../styles";
import { ComputerCanvas } from "./3D_models";
import { SectionWrapper } from "../hoc";
import { useEffect, useState } from "react";
import { profilePic } from "../assets";

const About = () => {
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
        document.getElementById("webgl-section");

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
        className="relative w-full mx-auto"
        variants={textVariant()}
      >
        <div className="abosulte m-0">
          <motion.h2
            variants={fadeIn("down", "spring", 0.1, 1)}
            className={`${styles.sectionHeadText}`}
          >
            About Me.
          </motion.h2>
          <article className="flex flex-row md:flex-nowrap flex-wrap md:justify-stretch justify-center md:gap-20 gap-6">
            <motion.p
              variants={fadeIn("right", "spring", 0.1, 1)}
              className={`${styles.sectionSubText} mt-4 max-w-3xl leading-[30px] text-justify`}
            >
              I am a Software Developer currently based in Birmingham. In the
              frontend I mainly work with JavaScript | TypeScript with their
              associated libraries: React.js, Vue.js, Next.js, Vite.js,
              Three.js, Ionic and Capacitor; HTML, and CSS (most of the time using
              Tailwind). In the backend I am proficient in using JavaScript with
              Node.js, Express.js and Jest, PostgreSQL as data management
              system, and Firebase. To expand my skill set, I am actively
              learning C#, .NET, Python, and AWS, as I believe in continuously
              enhancing my abilities and staying up-to-date with industry
              trends.&nbsp;&#128187;&nbsp;&#128187;
              <br /> <br />
              Challenges lover, I never give up, motivated to learn new things
              every day, willing to relocate, and keep growing in the tech
              field.
            </motion.p>
            <motion.img
              variants={fadeIn("down", "spring", 0.1, 1)}
              src={profilePic}
              alt="profile picture"
              className="lg:w-3/12 lg:mt-0 md:w-60 md:h-full md:mt-[180px] w-2/6 p-0 m-0 rounded-full"
            />
          </article>
        </div>
        <motion.div
          id="webgl-section"
          className={`${
            isGrabbing ? "cursor-grabbing" : "cursor-grab"
          } relative h-[200px] sm:h-[300px] lg:h-[600px]`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {showWebGLComponents && <ComputerCanvas />}
        </motion.div>
      </motion.section>
    </>
  );
};

export default SectionWrapper(About, "about");
