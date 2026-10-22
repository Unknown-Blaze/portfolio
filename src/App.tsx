import { Awards } from "./components/Awards";
import { Beyond } from "./components/Beyond";
import { Contact } from "./components/Contact";
import { Dim } from "./components/Dim";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Now } from "./components/Now";
import { Research } from "./components/Research";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <div className="sheet">
        <main id="main">
          <Hero />
          <Dim label="00 → 01" />
          <Now />
          <Dim label="01 → 02" />
          <Work />
          <Dim label="02 → 03" />
          <Experience />
          <Dim label="03 → 04" />
          <Research />
          <Dim label="04 → 05" />
          <Awards />
          <Dim label="05 → 06" />
          <Skills />
          <Dim label="06 → 07" />
          <Education />
          <Dim label="07 → 08" />
          <Beyond />
          <Dim label="08 → 09" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
