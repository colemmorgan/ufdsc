import { IoMenu } from "react-icons/io5";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Officers from "./components/Officers";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <img src="/lights.svg" className="absolute -left-12 sm:left-40" />
      <Nav/>
      <Hero/>
      <Features/>
      <About/>
      <Officers/>
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
