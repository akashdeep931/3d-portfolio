import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";
import styles from "../styles.ts";
import mainLogo from "../assets/main-logo.svg";

const Header = () => {
  const [pageLoc, setPageLoc] = useState("");
  const navLinks: { id: string; title: string }[] = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <header>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={(): void => {
              setPageLoc("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={mainLogo}
              alt="portfolio logo"
              className="w-12 h-12 object-contain rounded-full"
            ></img>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link: { id: string; title: string }): ReactNode => {
              return (
                <li
                  key={link.id}
                  className={`${
                    pageLoc === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={(): void => {
                    setPageLoc(link.title);
                  }}
                >
                  <a id={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
