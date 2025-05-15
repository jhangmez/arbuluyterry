// app/servicios/medio-ambiente/page.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaLeaf,
  FaBalanceScale,
  FaRecycle,
  FaFileAlt,
  FaTint,
  FaExclamationTriangle,
} from "react-icons/fa"; // Iconos
import {
  BAGUA_AGUA_IMG,
  MOTUPE_CEMENTERIO_IMG,
  MOTUPE_HOSPITAL_IMG,
  OLMOS_PTAR_ORIENTE_IMG,
} from "@/app/routes";

const medioAmbienteServices = [
  {
    title: "Estudios de Impacto Ambiental (EIA)",
    description:
      "Elaboramos Estudios de Impacto Ambiental (EIA) Detallados y Semidetallados (EIA-sd), así como Declaraciones de Impacto Ambiental (DIA), para identificar, evaluar y proponer medidas de mitigación a los impactos ambientales de proyectos de inversión, asegurando su viabilidad y cumplimiento normativo.",
    icon: <FaFileAlt className="w-8 h-8 text-green-600" />,
    image: MOTUPE_HOSPITAL_IMG,
    exampleProjects: [
      {
        name: "EIA-sd Establecimiento de Salud Motupe",
        link: "/proyectos/eiasd-salud-motupe",
      },
      {
        name: "DIA PTARD Campamento Occidente Olmos",
        link: "/proyectos/dia-olmos-occidente",
      },
    ],
  },
  {
    title: "Programas de Adecuación y Manejo Ambiental (PAMA)",
    description:
      "Desarrollamos PAMA para actividades existentes, con el fin de adecuarlas a la legislación ambiental vigente. Esto implica un diagnóstico, la identificación de impactos y la formulación de un plan de acción con medidas correctivas y preventivas.",
    icon: <FaRecycle className="w-8 h-8 text-green-600" />,
    image: MOTUPE_CEMENTERIO_IMG,
    exampleProjects: [
      {
        name: "PAMA Cementerio Público Motupe",
        link: "/proyectos/pama-cementerio-motupe",
      },
    ],
  },
  {
    title: "Planes de Manejo Ambiental y Monitoreo",
    description:
      "Diseñamos e implementamos Planes de Manejo Ambiental que detallan las acciones para prevenir, controlar y mitigar impactos. Incluimos programas de monitoreo para verificar la efectividad de las medidas y asegurar el cumplimiento continuo de los compromisos ambientales.",
    icon: <FaBalanceScale className="w-8 h-8 text-green-600" />,
    image: OLMOS_PTAR_ORIENTE_IMG,
    exampleProjects: [
      {
        name: "PMA PTARD Campamento Oriente Olmos",
        link: "/proyectos/pma-olmos-oriente",
      },
    ],
  },
  {
    title: "Estudios de Saneamiento Ambiental",
    description:
      "Realizamos consultorías especializadas para proyectos de saneamiento básico, incluyendo sistemas de agua potable, alcantarillado, plantas de tratamiento de aguas residuales (PTARD) y sistemas de drenaje pluvial, con el objetivo de mejorar la salud pública y proteger los ecosistemas acuáticos.",
    icon: <FaTint className="w-8 h-8 text-green-600" />,
    image: BAGUA_AGUA_IMG,
    exampleProjects: [
      {
        name: "EIA-sd Agua Potable y Alcantarillado Ferreñafe",
        link: "/proyectos/eiasd-agua-ferrenafe",
      },
    ],
  },
  {
    title: "Estudios de Línea Base y Evaluaciones Específicas",
    description:
      "Ejecutamos Estudios de Línea Base para caracterizar el entorno físico, biológico y socioeconómico previo a un proyecto. También realizamos evaluaciones ambientales específicas, estudios de riesgo, impacto vial y social, como parte de una gestión ambiental integral.",
    icon: <FaExclamationTriangle className="w-8 h-8 text-green-600" />,
    image:
      "/images/EstudiodeImpactoAmbientaldeRedesdeAguaPotableydeAlcantarilladodelaCiudaddeLambayeque.webp",
  },
];

export default function MedioAmbientePage() {
  return (
    <div className="flex min-h-screen flex-col font-play">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-600 to-teal-700 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/servicios/medio-ambiente-card.webp" // Banner de naturaleza o proyectos sostenibles
              alt="Consultoría y Gestión Ambiental"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Consultoría Ambiental Estratégica
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Promovemos el desarrollo sostenible mediante la gestión ambiental
              responsable y soluciones innovadoras.
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
              Nuestro Compromiso Ambiental
            </UnderlinedHeading>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4 text-center md:text-left leading-relaxed">
              <p>
                Arbulú & Terry SAC está firmemente comprometida con la
                protección del medio ambiente y el uso sostenible de los
                recursos naturales. Nuestros servicios de consultoría ambiental
                están diseñados para ayudar a nuestros clientes a cumplir con la
                normativa, minimizar riesgos y optimizar sus operaciones desde
                una perspectiva ecológica y socialmente responsable.
              </p>
              <p>
                Contamos con un equipo de especialistas en diversas disciplinas
                ambientales, capaces de abordar los desafíos más complejos y
                proponer soluciones efectivas que integren la conservación
                ambiental con los objetivos de desarrollo de cada proyecto.
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
              Nuestros Servicios Ambientales
            </UnderlinedHeading>
            <div className="space-y-12 mt-10">
              {medioAmbienteServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col rounded-xl shadow-lg overflow-hidden bg-white ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
                      <span className="mr-3 p-2 bg-green-600/10 rounded-full">
                        {service.icon}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-green-700">
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
                                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-green-600 hover:text-white transition-colors"
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

        <section className="py-16 md:py-20 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Requiere una evaluación ambiental para su proyecto?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Contáctenos para una asesoría experta y asegure la sostenibilidad
              y cumplimiento de su inversión.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">Solicitar Consultoría</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
