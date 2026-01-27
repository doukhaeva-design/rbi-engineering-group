import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import KeyFigures from "./components/sections/KeyFigures";
import Activities from "./components/sections/Activities";
import WhyUs from "./components/sections/WhyUs";
import KeyProjects from "./components/sections/KeyProjects";
import Partners from "./components/sections/Partners";
import CTA from "./components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <KeyFigures />
      <Activities />
      <WhyUs />
      <KeyProjects />
      <Partners />
      <CTA />
    </main>
  );
}
