import { Header, Intro, About, Experiences } from "./components";

const App = () => {
  return (
    <main className="relative z-0 bg-primary">
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Intro />
      </section>
      <About />
      <Experiences />
    </main>
  );
};

export default App;
