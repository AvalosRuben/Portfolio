import Connect from "./components/Connect";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import TopBar from "./components/TopBar";
import BottomBar from "./components/ui/BottomBar";

function App() {
  return (
    <div className="flex flex-col  bg-cream micro-grid text-charcoal items-center">
      <TopBar />
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <Connect />
      <BottomBar />
    </div>
  );
}

export default App;
