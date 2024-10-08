import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import Officers from "./components/Officers";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Socials />
      <Officers/>
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;


