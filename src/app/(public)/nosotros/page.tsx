import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading"; // Importar el componente
import Image from "next/image";

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
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <UnderlinedHeading
                as="h2"
                className="text-3xl md:text-4xl font-semibold text-gray-800"
                paddingBottom="pb-3 md:pb-4"
              >
                Campos en la Actividad
              </UnderlinedHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  URBANISMO
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>Proyectos de Infraestructura Urbana.</li>
                  <li>Planes de Desarrollo Urbano.</li>
                  <li>Diseño Urbano.</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  MEDIO AMBIENTE
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>Estudios de Impacto Ambiental.</li>
                  <li>Evaluaciones Ambientales.</li>
                  <li>Estudios de Línea Base.</li>
                  <li>Programas de Adecuación Ambiental.</li>
                  <li>Estudios de Saneamiento Ambiental.</li>
                  <li>Estudios de Gestión Ambiental.</li>
                  <li>Estudios de Impacto Vial.</li>
                  <li>Evaluaciones de Impacto Social.</li>
                </ul>
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
