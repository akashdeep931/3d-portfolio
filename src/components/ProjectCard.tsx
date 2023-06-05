import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Project } from "../../types/main";
import { fadeIn } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { ReactNode } from "react";

const ProjectCard = ({ proj, index }: { proj: Project; index: number }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.9)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 300,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <figure className="relative w-full h-[230px]">
          <img
            src={proj.image}
            alt={`${proj.name} visual representation`}
            className="w-full h-full object-cover object-left rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <a
              href={proj.repo}
              className="bg-white text-black rounded-full hover:bg-black hover:text-white h-8 w-8 flex justify-center items-center"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={proj.link}
              className="bg-white text-black rounded-full hover:bg-black hover:text-white h-8 w-8 flex justify-center items-center"
              target="_blank"
            >
              <BiLinkExternal size={20} />
            </a>
          </div>
        </figure>
        <article className="mt-5">
          <h3 className="text-[24px] font-bold">{proj.name}</h3>
          <p className="mt-5 text-[#D8D8D8]">
            Tech Stack:&nbsp;
            {proj.techStack.map(
              (tech: string, index: number, currA: string[]): ReactNode => (
                <span>
                  {index === currA.length - 1 ? tech + "." : tech + ", "}
                </span>
              )
            )}
          </p>
        </article>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
