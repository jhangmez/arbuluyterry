import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading"; // Importar el componente
import Link from "next/link";
import { FaCity, FaLeaf, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
export default function Nosotros() {
  return (
    <section className="flex min-h-screen flex-col font-play">
      <Header />
      <main className="flex-1">
        {/* Sección: Nuestra organización */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              {" "}
              {/* Div para centrar y dar margen inferior al título */}
              <UnderlinedHeading
                as="h2"
                className="text-3xl md:text-4xl font-semibold text-gray-800"
                paddingBottom="pb-3 md:pb-4" // Espacio entre texto, línea y contenido
              >
                Nuestra Organización
              </UnderlinedHeading>
            </div>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                Arbulú & Terry SAC, es una empresa dedicada a la actividad de la
                consultorías de proyectos urbano ambientales, dando énfasis a la
                elaboración de estudios de impacto ambiental, estudios de
                impacto vial y social. Con capacidad de proporcionar sus
                servicios en todo el Perú.
              </p>
              <p>
                El equipo profesional de Arbulú & Terry SAC está conformado por
                profesionales Arquitectos, Ingenieros, Planificadores Urbanos y
                Sociólogos, capacitados con estudios de Doctorado y Maestría. La
                amplia experiencia del plantel garantiza el manejo profesional y
                eficiente en todo el servicio encomendado.
              </p>
            </div>
            {/* Opcional: Imagen de la organización
            <div className="mt-10 md:mt-14 flex justify-center">
              <Image
                src="/images/office-team.webp" // Reemplaza con una imagen relevante
                alt="Equipo de Arbulú & Terry SAC"
                width={700}
                height={450}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            */}
          </div>
        </section>

        {/* Sección: Misión y Visión */}
        <section className="py-12 md:py-16 bg-gray-50">
          {" "}
          {/* Fondo sutil para diferenciar la sección */}
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <UnderlinedHeading
                as="h2"
                className="text-3xl md:text-4xl font-semibold text-gray-800"
                paddingBottom="pb-3 md:pb-4"
              >
                Misión y Visión
              </UnderlinedHeading>
            </div>
            <div className="max-w-3xl mx-auto space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-center md:text-left">
                  Misión
                </h3>
                <p className="text-lg text-gray-700">
                  La misión de Arbulú & Terry SAC es resolver las necesidades de
                  servicios de proyectos urbano ambientales de sus clientes, más
                  allá de las obligaciones contractuales, trabajando en un
                  entorno que motive y desarrolle a su personal respetando el
                  medio ambiente en armonía con las comunidades en las que opera
                  y asegurando el retorno de sus accionistas.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-center md:text-left">
                  Visión
                </h3>
                <p className="text-lg text-gray-700">
                  Ser una empresa próspera y sólida muy reconocida por sus
                  servicios en proyectos urbano ambientales, que brindamos al
                  cliente y el apoyo que brinda a la Región y al País en la
                  ejecución de proyectos que propician el desarrollo sostenible
                  de nuestro territorio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Campos en la Actividad */}
        <section className="py-12 md:py-16 bg-gray-100">
          {" "}
          {/* Un fondo diferente para destacar */}
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <UnderlinedHeading
                as="h2"
                className="text-3xl md:text-4xl font-semibold text-gray-800"
                paddingBottom="pb-3 md:pb-4"
              >
                Nuestras Áreas de Especialización {/* Título más descriptivo */}
              </UnderlinedHeading>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Ofrecemos una gama completa de servicios de consultoría en
                urbanismo y medio ambiente, aplicando nuestra experiencia para
                lograr resultados sostenibles y de alto impacto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Tarjeta para Urbanismo */}
              <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group text-center p-6 md:p-8 items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <FaCity className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Urbanismo y Desarrollo Territorial
                </h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                  Desde la planificación estratégica hasta el diseño detallado
                  de proyectos, transformamos espacios para crear comunidades
                  prósperas y sostenibles.
                </p>
                <ul className="text-left list-disc pl-5 space-y-1 text-sm text-gray-500 mb-6 w-full max-w-xs">
                  <li>Planes de Desarrollo Urbano</li>
                  <li>Proyectos de Infraestructura</li>
                  <li>Diseño Urbano y Habilitaciones</li>
                  {/* Puedes agregar más si es conciso */}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <Link href="/servicios/urbanismo">
                    Conocer Más <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Tarjeta para Medio Ambiente */}
              <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group text-center p-6 md:p-8 items-center">
                <div className="p-4 bg-green-600/10 rounded-full mb-4">
                  <FaLeaf className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  Consultoría Ambiental
                </h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                  Brindamos soluciones expertas para la gestión ambiental,
                  asegurando la viabilidad de sus proyectos y el cumplimiento
                  normativo.
                </p>
                <ul className="text-left list-disc pl-5 space-y-1 text-sm text-gray-500 mb-6 w-full max-w-xs">
                  <li>Estudios de Impacto Ambiental</li>
                  <li>Planes de Manejo (PAMA)</li>
                  <li>Evaluaciones y Monitoreo</li>
                  {/* Puedes agregar más si es conciso */}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto group-hover:bg-green-600 group-hover:text-white transition-colors"
                >
                  <Link href="/servicios/medio-ambiente">
                    Conocer Más <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
