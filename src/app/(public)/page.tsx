import { Header } from "@/components/(public)/header";
import { Hero } from "@/components/(public)/landingpage/Hero";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import { ProyectosSection } from "@/components/(public)/landingpage/proyectos";
import Profesionales from "@/components/(public)/profesionales";
import CtaSection from "@/components/(public)/landingpage/CtaSection";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header relative={false} />
      <main className="flex-1">
        <Hero />
      </main>
      <Profesionales />
      <ProyectosSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
