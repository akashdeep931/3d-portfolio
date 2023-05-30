import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles.ts";
import { mainLogo, menuIcon, closeIcon } from "../assets";
import { navLinks } from "../constants.ts";

const Header = () => {
  const [pageLoc, setPageLoc] = useState("");
  const [isMenuOpened, setIsMenuOpened] = useState(false);

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
            />
            <p className="text-[20px] font-bold flex">Akash | Portfolio</p>
          </Link>
          <ul className="list-none hidden md:flex flex-row gap-10">
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
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
          <aside className="md:hidden flex flex-1 justify-end item-center">
            <img
              src={isMenuOpened ? closeIcon : menuIcon}
              alt="menu icon"
              className="w-[29px] h-[29px] object-contain cursor-pointer"
              onClick={(): void => setIsMenuOpened(!isMenuOpened)}
            />

            <div
              className={`${
                isMenuOpened ? "flex" : "hidden"
              } p-6 bg-gradient-to-r from-blue-300 to-transparent absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-8">
                {navLinks.map(
                  (link: { id: string; title: string }): ReactNode => {
                    return (
                      <li
                        key={link.id}
                        className={`${
                          pageLoc === link.title
                            ? "text-[#a2a8d3]"
                            : "text-white"
                        } font-poppins font-medium text-[16px] font-medium cursor-pointer`}
                        onClick={(): void => {
                          setPageLoc(link.title);
                          setIsMenuOpened(!isMenuOpened);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Header;
