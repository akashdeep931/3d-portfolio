import { useEffect, useState } from "react";
import {
  Header,
  Intro,
  About,
  Experiences,
  Tech,
  Projects,
  Contact,
  SocialIcons,
  Advice,
} from "./components";
import { StarsCanva } from "./components/3D_models";

const App = () => {
  const [smallViewPort, setSmallViewPort] = useState(false);

  useEffect((): (() => void) => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 950px)");

    setSmallViewPort(mediaQuery.matches);

    const handleScreenSizeChange = (event: MediaQueryListEvent) => {
      setSmallViewPort(event.matches);
    };

    mediaQuery.addEventListener("change", handleScreenSizeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);

  return (
    <main className="relative z-0 bg-primary">
      {smallViewPort && localStorage.getItem("gotIt") === null && (
        <Advice setSmallViewPort={setSmallViewPort} />
      )}
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Intro />
      </section>
      <About />
      <Experiences />
      <Tech />
      <Projects />
      <section className="relative z-0">
        <Contact />
        <StarsCanva />
      </section>
      <div>
        <SocialIcons />
      </div>
    </main>
  );
};

export default App;
