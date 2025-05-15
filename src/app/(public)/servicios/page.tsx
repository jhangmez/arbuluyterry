// app/servicios/page.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaCity,
  FaLeaf,
  FaUsersCog,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";

const serviceAreas = [
  {
    title: "Urbanismo y Desarrollo Territorial",
    description:
      "Planificamos y diseñamos el futuro de las ciudades y territorios. Desde planes de desarrollo urbano hasta proyectos de infraestructura y diseño arquitectónico, creamos espacios funcionales, sostenibles y que mejoran la calidad de vida.",
    link: "/servicios/urbanismo",
    image: "/images/servicios/urbanismo-card.webp",
    icon: <FaCity className="w-10 h-10 text-primary mb-3" />,
  },
  {
    title: "Consultoría y Gestión Ambiental",
    description:
      "Ofrecemos soluciones integrales para la gestión ambiental de proyectos. Realizamos Estudios de Impacto Ambiental, Planes de Manejo, PAMAs y más, asegurando el cumplimiento normativo y promoviendo la sostenibilidad de sus inversiones.",
    link: "/servicios/medio-ambiente",
    image: "/images/servicios/medio-ambiente-card.webp",
    icon: <FaLeaf className="w-10 h-10 text-green-600 mb-3" />,
  },
];

const whyChooseUsPoints = [
  {
    title: "Experiencia Comprobada",
    text: "Más de 25 años de trayectoria en la ejecución exitosa de proyectos de urbanismo y medio ambiente en todo el Perú.",
    icon: <FaUsersCog className="w-8 h-8 text-amarillo" />,
  },
  {
    title: "Enfoque Multidisciplinario",
    text: "Un equipo de arquitectos, ingenieros, sociólogos y especialistas ambientales altamente calificados.",
    icon: <FaLightbulb className="w-8 h-8 text-amarillo" />,
  },
  {
    title: "Compromiso con la Sostenibilidad",
    text: "Soluciones que integran el desarrollo económico, la equidad social y la protección ambiental a largo plazo.",
    icon: <FaBalanceScale className="w-8 h-8 text-amarillo" />,
  },
];

export default function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col font-play">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 bg-gray-800 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/servicios/banner-general.webp" // Banner general atractivo
              alt="Servicios Integrales Arbulú & Terry SAC"
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Nuestros Servicios Integrales
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Arbulú & Terry SAC: Su aliado estratégico en consultoría de
              proyectos urbano ambientales. Impulsamos el desarrollo sostenible
              del Perú con soluciones innovadoras y eficientes.
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
              Nuestras Áreas de Especialización
            </UnderlinedHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10">
              {serviceAreas.map((area) => (
                <div
                  key={area.title}
                  className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="relative w-full h-60 md:h-72">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
                    <div className="flex justify-center">{area.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                      {area.description}
                    </p>
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="mt-auto w-fit mx-auto"
                    >
                      <Link href={area.link}>Más Información</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <UnderlinedHeading
              as="h2"
              className="text-3xl md:text-4xl"
              paddingBottom="pb-3"
            >
              ¿Por Qué Elegir Arbulú & Terry SAC?
            </UnderlinedHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {whyChooseUsPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 bg-amarillo/20 text-amarillo rounded-full mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para iniciar su proyecto con nosotros?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Ya sea un desafío urbano o una necesidad de gestión ambiental,
              estamos aquí para convertir su visión en realidad.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">Hable con un Experto</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
