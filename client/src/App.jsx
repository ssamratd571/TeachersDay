import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import Petals from "./components/Petals";

import "./index.css";

function App() {
  return (
    <>
      <Particles />
      <Petals />

      <Navbar />
      <Hero />
    </>
  );
}

export default App;