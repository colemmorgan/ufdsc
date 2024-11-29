import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingGrid from "./components/LandingGrid";
import SolutionChallenge from "./components/SolutionChallenge";
import Team from "./components/Team";

function App() {
  return (
    <div className="mx-auto my-4 sm:my-8 grid w-full max-w-[1228px] grid-cols-2 gap-2 px-2 sm:px-6 md:gap-4 lg:grid-cols-4 lg:px-10">
      <Hero />
      <div className="hidden lg:block col-span-2 lg:col-span-1 h-full">
        <Team />
      </div>
      <LandingGrid />

      <About />
      <div className="lg:hidden col-span-2 lg:col-span-1">
        <Team />
      </div>
      <SolutionChallenge />

      <Events />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
