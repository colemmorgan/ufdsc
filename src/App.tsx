import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Officers from "./components/Officers";
import SolutionChallenge from "./components/SolutionChallenge";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <About />
      <SolutionChallenge/>
      <Officers/>
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
