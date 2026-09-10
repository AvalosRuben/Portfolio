import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="flex flex-col  bg-cream micro-grid text-charcoal items-center">
      <TopBar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
