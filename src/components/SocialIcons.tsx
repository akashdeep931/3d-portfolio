import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <figure className="flex h-auto w-full justify-center items-center gap-10 p-10">
      <a href="https://github.com/akashdeep931" target="_blank">
        <FaGithub size={40} />
      </a>
      <a href="https://www.linkedin.com/in/aks931/" target="_blank">
        <FaLinkedinIn size={40} />
      </a>
    </figure>
  );
};

export default SocialIcons;
