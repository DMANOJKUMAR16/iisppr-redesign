import Hero from "./sections/Hero";
import Programs from "./sections/Programs";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <Hero />
      <Programs />
      <Testimonials />
    </main>
  );
}

export default App;