// components/(public)/landingpage/profesionales.tsx
import TeamSection from "./TeamSection";

const teamMembersData: TeamMember[] = [
  {
    name: "Dr. Arq. Rodolfo Arbulú Chereque",
    title: "Arquitecto, Gerente de Estudios y Proyectos",
    imageUrl: "/images/team/rodolfo-arbulu.jpg",
    bio: "Doctor en Ciencias Ambientales. Más de 28 años de experiencia en proyectos urbanos y ambientales.",
  },
  {
    name: "Mg. Arq. Marianella Rosa Terry Ramos",
    title: "Arquitecta, Gerente General",
    imageUrl: "/images/team/marianella-terry.jpg",
    bio: "Doctorando en Territorio y Urbanismo Sostenible. Amplia experiencia en planificación urbana.",
  },
  {
    name: "Dr. Ing. Anibal Quintín Cáceres Narrea",
    title: "Ingeniero Geólogo",
    imageUrl: "/images/team/anibal-caceres.jpg",
    bio: "Doctor en Ciencias Ambientales con 50 años de experiencia.",
  },
  {
    name: "Mg. Ing. Carmen Teresa Meza Camacho",
    title: "Ingeniera Sanitaria",
    imageUrl: "/images/team/carmen-meza.jpg",
    bio: "Con amplia experiencia en proyectos edificatorios, saneamiento, y estudios ambientales.",
  },
  {
    name: "Dr. Ing. Anibal Jesús Salazar Mendoza",
    title: "Ingeniero Mecánico",
    imageUrl: "/images/team/anibal-salazar.jpg",
    bio: "Experiencia en proyectos edificatorios y estudios ambientales.",
  },
  {
    name: "Dr. Ing. José Carlos Matías León",
    title: "Ingeniero Civil",
    imageUrl: "/images/team/jose-matias.jpg",
    bio: "Especialista en ingeniería de transportes e ingeniería estructural.",
  },
  {
    name: "Mg. Cs Mirian Vargas Saavedra",
    title: "Socióloga",
    imageUrl: "/images/team/mirian-vargas.jpg",
    bio: "Experiencia en planificación social, planeamiento estratégico local y estudios ambientales.",
  },
];

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export default function Profesionales() {
  return (
    <div className="container mx-auto px-4 py-10 font-play">
      <h1 className="text-3xl font-bold text-center mb-2">Equipo Técnico</h1>
      <div className="border-t border-primary w-24 mx-auto mb-8"></div>
      <h3 className="text-xl text-center mb-8">Conozca a Nuestros Expertos</h3>
      <TeamSection
        teamMembers={teamMembersData}
        maxMembersToShow={2}
        showButton={true}
      />
    </div>
  );
}
