import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CompetitiveCoding from './components/CompetitiveCoding';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CompetitiveCoding />
      <Experience />
      <Certificates />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}


