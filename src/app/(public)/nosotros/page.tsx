import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";

export default function Nosotros() {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div>
          <h2 className="w-full py-10 bg-crema font-titulo font-medium text-xl">
            Nuestra organización
          </h2>
          <p>
            Arbulú & Terry SAC, es una empresa dedicada a la actividad de la
            consultorías de proyectos urbano ambientales, dando énfasis a la
            elaboración de estudios de impacto ambiental, estudios de impacto
            vial y social. Con capacidad de proporcionar sus servicios en todo
            el Perú.
          </p>
          <p>
            El equipo profesional de Arbulú & Terry SAC está conformado por
            profesionales Arquitectos, Ingenieros, Planificadores Urbanos y
            Sociólogos, capacitados con estudios de Doctorado y Maestría. La
            amplia experiencia del plantel garantiza el manejo profesional y
            eficiente en todo el servicio encomendado
          </p>
        </div>
        <div>
          <h2 className="w-full py-10 bg-crema font-titulo font-medium text-xl">
            Misión y Visión
          </h2>
          <h3>Misión</h3>
          <p>
            La misión de Arbulú & Terry SAC es resolver las necesidades de
            servicios de proyectos urbano ambientales de sus clientes, más allá
            de las obligaciones contractuales, trabajando en un entorno que
            motive y desarrolle a su personal respetando el medio ambiente en
            armonía con las comunidades en las que opera y asegurando el retorno
            de sus accionistas.
          </p>
          <h3>Visión</h3>
          <p>
            Ser una empresa próspera y sólida muy reconocida por sus servicios
            en proyectos urbano ambientales, que brindamos al cliente y el apoyo
            que brinda a la Región y al País en la ejecución de proyectos que
            propician el desarrollo sostenible de nuestro territorio.
          </p>
        </div>
        <div className="prose mx-auto ">
          <h2 className="w-full py-10 bg-crema font-titulo font-medium text-xl">
            Campos en la Actividad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3>URBANISMO</h3>
              <ul className="list-disc pl-5">
                <li>Proyectos de Infraestructura Urbana.</li>
                <li>Planes de Desarrollo Urbano.</li>
                <li>Diseño Urbano.</li>
              </ul>
            </div>
            <div>
              <h3>MEDIO AMBIENTE</h3>
              <ul className="list-disc pl-5">
                <li>Estudios de Impacto Ambiental.</li>
                <li>Evaluaciones Ambientales.</li>
                <li>Estudios de Línea Base.</li>
                <li>Programas de Adecuación Ambiental.</li>
                <li>Estudios de Saneamiento Ambiental.</li>
                <li>Estudios de Gestión Ambiental.</li>
                <li>Estudios de Impacto Vial</li>
                <li>Evaluaciones de Impacto Social.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
