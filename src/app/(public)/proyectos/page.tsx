// app/proyectos/page.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import { projectsList, ProjectDetail } from "@/lib/projectsData"; // Ajusta la ruta
import ProjectCard from "@/components/(public)/ProjectCard"; // Importa la nueva tarjeta
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";
import Image from "next/image";

export default function ProyectosPage() {
  // No necesitas tipar aquí si projectsList ya está correctamente tipado en su archivo de origen
  // const typedProjectsData: ProjectDetail[] = projectsList;

  return (
    <section className="flex min-h-screen flex-col font-play bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Sección Hero para Proyectos (Opcional pero recomendado) */}
        <section className="relative py-20 md:py-28 bg-gray-700 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/Estudio-de-Impacto-Ambiental-del-PROYECTO-MEJORAMIENTO-DE-PISTAS-Y-VEREDAS-EN-LA-LOCALIDAD-DE-AYABAC.webp" // Un banner general para la sección de proyectos
              alt="Proyectos Destacados de Arbulú & Terry SAC"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Nuestra Trayectoria en Proyectos
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explora una selección de nuestros trabajos más representativos en
              urbanismo y gestión ambiental a lo largo del Perú.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <UnderlinedHeading
            as="h2"
            className="text-2xl md:text-3xl text-gray-800"
            paddingBottom="pb-3"
          >
            Consultorías y Proyectos Realizados
          </UnderlinedHeading>

          {/* Aquí podrías agregar filtros en el futuro */}
          {/* <div className="my-8 flex justify-center gap-4">
            <Button variant="outline">Todos</Button>
            <Button variant="outline">Urbanismo</Button>
            <Button variant="outline">Medio Ambiente</Button>
          </div> */}

          {projectsList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projectsList.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">
              Actualmente no hay proyectos para mostrar. Vuelva pronto.
            </p>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
