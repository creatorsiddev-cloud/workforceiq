import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Footer from "../sections/Footer";

import "../styles/Landing.css";

function Landing() {
  return (
    <main className="landing-page">

      <Navbar />

      <Hero />

      <Features />

      <Footer />

    </main>
  );
}

export default Landing;