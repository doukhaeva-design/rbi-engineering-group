import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import AboutPreview from "./components/sections/AboutPreview";
import KeyFigures from "./components/sections/KeyFigures";
import Activities from "./components/sections/Activities";
import ModularPreview from "./components/sections/ModularPreview";
import KeyCompetencies from "./components/sections/KeyCompetencies";
import WhereUsed from "./components/sections/WhereUsed";
import KeyProjects from "./components/sections/KeyProjects";
import Partners from "./components/sections/Partners";
import LicensesPreview from "./components/sections/LicensesPreview";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutPreview />
      <KeyFigures />
      <Activities />
      <ModularPreview />
      <WhereUsed />
      <KeyCompetencies limited={true} />
      <KeyProjects />
      <Partners />
      {/* Licenses moved to dedicated page only */}
      <CTA />
      <Footer />
    </main>
  );
}
