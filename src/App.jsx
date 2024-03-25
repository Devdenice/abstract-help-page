import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";

function App() {
  return (
    <>
      <section className="w-full">
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
