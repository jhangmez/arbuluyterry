// pages/equipo.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import TeamSection from "@/components/(public)/TeamSection"; // Correct import path
import { teamMembersData } from "@/app/routes";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";

export default function Equipo() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4 font-play">
          <UnderlinedHeading as="h1" className="text-3xl" paddingBottom="pb-2">
            Equipo Técnico
          </UnderlinedHeading>
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
