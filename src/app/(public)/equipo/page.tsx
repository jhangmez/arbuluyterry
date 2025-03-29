// pages/equipo.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import TeamSection from "@/components/(public)/TeamSection"; // Correct import path
import { teamMembersData } from "@/app/routes";

export default function Equipo() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4 font-play">
          <h1 className="text-3xl font-bold text-center mb-2">
            Equipo Técnico
          </h1>
          <div className="border-t border-primary w-24 mx-auto mb-8"></div>
          <h3 className="text-xl text-center mb-8">
            Conozca a Nuestros Expertos
          </h3>
          <TeamSection teamMembers={teamMembersData} showButton={false} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
