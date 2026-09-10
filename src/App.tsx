import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col  bg-cream micro-grid text-charcoal items-center">
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
