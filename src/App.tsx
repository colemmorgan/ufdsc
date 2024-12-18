import CTA from "./components/CTA";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="px-1">
      <div className="border-grayer mx-auto min-h-screen max-w-[1200px] border-x p-3">
        <Nav />

        <CTA />

        <div className="pt-20 pb-32">
          <h1 className="text-center cal text-4xl">Focused on Project-Based Learning</h1>
          <p className="text-center text-dull pt-3 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, explicabo?</p>
        </div>
      </div>
    </div>
  );
}
