import { Dispatch, SetStateAction } from "react";
import { laptop } from "../assets";

const Advice = ({
  setSmallViewPort,
}: {
  setSmallViewPort: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    setSmallViewPort(false);
    localStorage.setItem("gotIt", "true");
  };

  return (
    <aside className="fixed h-full w-full flex flex-wrap justify-center items-center bg-[#000000] bg-opacity-70 z-10 p-10 overflow-scroll">
      <div className="text-center mt-[80px] py-8 px-10 md:px-20 bg-[#041C32] flex flex-col justify-start items-center gap-8 sm:gap-10 rounded-3xl">
        <h1 className="text-[30px] md:text-[60px] text-white font-black">
          On Mobile?
        </h1>
        <img
          src={laptop}
          alt="individual typing on laptop"
          className="rounded-full"
        />
        <p className="relative md:text-[22px]">
          Try it on a wider screen for a better user experience.
        </p>
        <button
          onClick={handleClick}
          className="relative bg-[#526D82] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold"
        >
          Got it!
        </button>
      </div>
    </aside>
  );
};

export default Advice;
