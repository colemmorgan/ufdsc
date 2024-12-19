import About from "./components/About";
import CTA from "./components/CTA";
import Nav from "./components/Nav";
import SolutionChallenge from "./components/SolutionChallenge";

export default function App() {
  return (
    <div className="px-1">
      <div className="mx-auto min-h-screen max-w-[1200px] border-x border-grayer p-3">
        <Nav />

        <CTA />

        <About />
        <SolutionChallenge/>
      </div>
    </div>
  );
}
