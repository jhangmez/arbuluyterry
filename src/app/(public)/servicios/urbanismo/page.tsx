// app/servicios/urbanismo/page.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaCity,
  FaRoad,
  FaDraftingCompass,
  FaBuilding,
  FaChessBoard,
} from "react-icons/fa"; // Iconos de ejemplo
import {
  CLUB_SOCIAL_ANCASH_EDIFICIO_OFICINAS_JESUS_MARIA,
  LAMBAYEQUE_AGUA_IMG,
  NUEVO_CHIMBOTE_PDU_IMG,
  ZARUMILLA_PAT_PDU_IMG,
} from "@/app/routes";

const urbanismoServices = [
  {
    title: "Planes de Desarrollo Urbano (PDU)",
    description:
      "Elaboramos Planes de Desarrollo Urbano (PDU) que orientan el crecimiento ordenado y sostenible de las ciudades. Estos instrumentos técnicos normativos definen la zonificación, usos de suelo, vialidad y estrategias de gestión urbana, integrando aspectos sociales, económicos y ambientales para mejorar la calidad de vida de la población.",
    icon: <FaCity className="w-8 h-8 text-primary" />,
    image: NUEVO_CHIMBOTE_PDU_IMG,
    exampleProjects: [
      { name: "PDU de Zarumilla, Tumbes", link: "/proyectos/pdu-zarumilla" },
      {
        name: "PDU del Distrito de Nuevo Chimbote, Ancash",
        link: "/proyectos/pdu-nuevo-chimbote",
      },
    ],
  },
  {
    title: "Proyectos de Infraestructura Urbana",
    description:
      "Desarrollamos proyectos integrales de infraestructura que son la base del funcionamiento de las ciudades. Esto incluye el diseño y planificación de redes viales, sistemas de saneamiento, equipamiento urbano y espacios públicos, enfocándonos en la sostenibilidad y la resiliencia.",
    icon: <FaRoad className="w-8 h-8 text-primary" />,
    image: CLUB_SOCIAL_ANCASH_EDIFICIO_OFICINAS_JESUS_MARIA,
  },
  {
    title: "Diseño Urbano y Habilitaciones Urbanas",
    description:
      "Creamos diseños urbanos que promueven la cohesión social y la identidad local. Nuestros servicios de habilitación urbana transforman terrenos en áreas urbanizadas con todos los servicios básicos, cumpliendo con la normativa vigente y altos estándares de calidad.",
    icon: <FaDraftingCompass className="w-8 h-8 text-primary" />,
    image: LAMBAYEQUE_AGUA_IMG,
    exampleProjects: [
      {
        name: "Habilitación Urbana Empresa Agroindustrial Pomalca",
        link: "/proyectos/habilitacion-pomalca",
      },
    ],
  },
  {
    title: "Planes de Acondicionamiento Territorial (PAT)",
    description:
      "Formulamos Planes de Acondicionamiento Territorial (PAT) para provincias, definiendo la ocupación y uso del territorio a una escala mayor. Los PAT buscan armonizar el desarrollo de actividades productivas, la conservación de recursos naturales y la prevención de riesgos, promoviendo un desarrollo territorial equilibrado.",
    icon: <FaChessBoard className="w-8 h-8 text-primary" />,
    image: ZARUMILLA_PAT_PDU_IMG,
    exampleProjects: [
      {
        name: "PAT de la Provincia de Zarunilla, Tumbes",
        link: "/proyectos/pat-zarumilla",
      },
    ],
  },
  {
    title: "Proyectos Urbano Arquitectónicos",
    description:
      "Desarrollamos proyectos arquitectónicos que se integran armónicamente al tejido urbano, aportando valor estético y funcional. Desde edificios institucionales y comerciales hasta complejos residenciales, cada diseño responde a las necesidades del usuario y su contexto.",
    icon: <FaBuilding className="w-8 h-8 text-primary" />,
    image: "/images/EDIFICIOEMPRESARIALSAN-PEDRO-CHICLAYO.webp", // Ejemplo de imagen
    exampleProjects: [
      {
        name: "Edificio Empresarial San Pedro, Chiclayo",
        link: "/proyectos/edificio-san-pedro",
      },
      {
        name: "Club Social Ancash, Lima",
        link: "/proyectos/club-social-ancash",
      },
    ],
  },
];

export default function UrbanismoPage() {
  return (
    <div className="flex min-h-screen flex-col font-play">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/servicios/medio-ambiente-card.webp"
              alt="Planificación Urbana y Desarrollo Territorial"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Urbanismo y Desarrollo Territorial
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Creamos ciudades y territorios sostenibles, funcionales y
              resilientes, mejorando la calidad de vida.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <UnderlinedHeading
              as="h2"
              className="text-3xl md:text-4xl"
              paddingBottom="pb-3"
            >
              Nuestro Enfoque en Urbanismo
            </UnderlinedHeading>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4 text-center md:text-left leading-relaxed">
              <p>
                En Arbulú & Terry SAC, concebimos el urbanismo como una
                herramienta fundamental para el progreso sostenible. Nuestros
                servicios están orientados a diseñar y gestionar el crecimiento
                de las áreas urbanas y rurales, asegurando un equilibrio entre
                el desarrollo económico, la equidad social y la preservación del
                medio ambiente.
              </p>
              <p>
                Con una trayectoria consolidada, nuestro equipo
                multidisciplinario de arquitectos, ingenieros y planificadores
                urbanos ofrece soluciones integrales que abarcan desde la
                planificación estratégica a gran escala hasta el diseño
                detallado de proyectos específicos, contribuyendo activamente al
                desarrollo ordenado del Perú.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <UnderlinedHeading
              as="h2"
              className="text-3xl md:text-4xl"
              paddingBottom="pb-3"
            >
              Servicios Especializados en Urbanismo
            </UnderlinedHeading>
            <div className="space-y-12 mt-10">
              {urbanismoServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col rounded-xl shadow-lg overflow-hidden bg-white ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse" // Alternar layout
                  }`}
                >
                  <div className="md:w-2/5 relative min-h-[250px] md:min-h-0">
                    <Image
                      src={service.image || "/images/placeholder-general.webp"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                    <div className="flex items-center mb-3">
                      <span className="mr-3 p-2 bg-primary/10 rounded-full">
                        {service.icon}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    {service.exampleProjects &&
                      service.exampleProjects.length > 0 && (
                        <div className="mt-auto">
                          <p className="font-medium text-sm text-gray-500 mb-1">
                            Proyectos de referencia:
                          </p>
                          <ul className="flex flex-wrap gap-2">
                            {service.exampleProjects.map((proj) => (
                              <li key={proj.name}>
                                <Link
                                  href={proj.link}
                                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors"
                                >
                                  {proj.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tiene un proyecto de desarrollo urbano o territorial?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Permítanos asesorarle con nuestra experiencia y conocimiento
              técnico para asegurar el éxito de su iniciativa.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">Contáctenos</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
