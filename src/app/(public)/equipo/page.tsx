import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";

export default function Equipo() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">Equipo</main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
