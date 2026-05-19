import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Programs from "./sections/Programs";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Programs />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;