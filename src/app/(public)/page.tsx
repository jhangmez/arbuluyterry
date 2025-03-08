import { Header } from "@/components/(public)/header";
import { Hero } from "@/components/(public)/landingpage/Hero";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
