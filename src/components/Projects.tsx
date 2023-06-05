import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import styles from "../styles";
import { ProjectCard } from ".";
import { projects } from "../constants";
import { Project } from "../../types/main";
import { ReactNode } from "react";

const Projects = () => {
  return (
    <>
      <motion.section
        variants={textVariant()}
        className="relative w-full mx-auto"
      >
        <motion.article variants={fadeIn("down", "spring", 0.1, 1)}>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          <motion.p
            className={`${styles.sectionSubText} mt-4 max-w-3xl leading-[30px]`}
          >
            My Work.
          </motion.p>
        </motion.article>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((proj: Project, index: number): ReactNode => {
            return <ProjectCard key={proj.name} proj={proj} index={index} />;
          })}
        </div>
      </motion.section>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
