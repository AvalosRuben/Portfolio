import Connect from "./components/Connect";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="flex flex-col  bg-cream micro-grid text-charcoal items-center">
      <TopBar />
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <Connect />
    </div>
  );
}

export default App;
