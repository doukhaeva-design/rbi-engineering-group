import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import Activities from "./components/sections/Activities";
import ModularPreview from "./components/sections/ModularPreview";
import KeyCompetencies from "./components/sections/KeyCompetencies";
import WhereUsed from "./components/sections/WhereUsed";
import KeyProjects from "./components/sections/KeyProjects";
import Partners from "./components/sections/Partners";
import LicensesPreview from "./components/sections/LicensesPreview";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Строительная компания в Астане, Казахстан | RBI Engineering Group',
  description: 'Генеральный подряд, строительно-монтажные работы (СМР), изготовление и монтаж металлоконструкций, модульные здания. Работаем с B2B и госсектором по всему Казахстану.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
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
