import { Header } from "@/components/(public)/header";
import { Hero } from "@/components/(public)/landingpage/Hero";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import { ProyectosSection } from "@/components/(public)/landingpage/proyectos";
import CtaSection from "@/components/(public)/landingpage/CtaSection";
import ProfesionalesSection from "@/components/(public)/landingpage/ProfesionalesSection";
import AboutUsShort from "@/components/(public)/landingpage/AboutUsShort";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header relative={false} />
      <main className="flex-1">
        <Hero />
      </main>
      <ProyectosSection />
      <AboutUsShort />
      <CtaSection />
      <ProfesionalesSection />
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
