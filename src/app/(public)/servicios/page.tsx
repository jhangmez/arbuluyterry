import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";

export default function Servicios() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">Servicios</main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
