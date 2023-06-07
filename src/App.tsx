import {
  Header,
  Intro,
  About,
  Experiences,
  Tech,
  Projects,
  Contact,
} from "./components";
import { StarsCanva } from "./components/3D_models";

const App = () => {
  return (
    <main className="relative z-0 bg-primary">
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
    </main>
  );
};

export default App;
