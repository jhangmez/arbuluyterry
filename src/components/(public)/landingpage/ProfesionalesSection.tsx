// components/(public)/landingpage/profesionales.tsx
import TeamSection from "../TeamSection";
import { teamMembersData } from "@/app/routes";

export default function ProfesionalesSection() {
  return (
    <div className="container mx-auto px-4 py-10 font-play">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center mb-2">
        Equipo Técnico
      </h1>
      <h3 className="text-xl text-center mb-8">Conozca a Nuestros Expertos</h3>
      <TeamSection
        teamMembers={teamMembersData}
        maxMembersToShow={2}
        showButton={true}
      />
    </div>
  );
}
