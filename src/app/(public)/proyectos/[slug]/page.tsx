// app/proyectos/[slug]/page.tsx
import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";
import {
  projectsList,
  getProjectById,
  ProjectDetail,
} from "@/lib/projectsData"; // O app/data/projectsData
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RollingGallery from "@/components/ui/RollingGallery";
import { FaCalendarAlt, FaMapMarkerAlt, FaTools, FaTag } from "react-icons/fa";

interface ProjectPageParams {
  slug: string;
}

// Función para generar los paths estáticos
export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  return projectsList.map((project) => ({
    slug: project.id,
  }));
}

// Componente de la página del proyecto
export default function ProjectPage({ params }: { params: ProjectPageParams }) {
  const project = getProjectById(params.slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col font-play">
        <Header />
        <main className="flex-1 py-20 text-center container mx-auto">
          <UnderlinedHeading as="h1" className="text-3xl">
            Proyecto no Encontrado
          </UnderlinedHeading>
          <p className="text-lg text-gray-600 mb-8">
            El proyecto que busca no está disponible o la URL es incorrecta.
          </p>
          <Button asChild>
            <Link href="/proyectos">Ver todos los proyectos</Link>
          </Button>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  // Para la galería de "Otros Proyectos", excluimos el actual y tomamos algunos.
  const otherProjectsForGallery = projectsList
    .filter((p) => p.id !== project.id)
    .slice(0, 8) // Mostrar hasta 8 otros proyectos
    .map((p) => ({ url: p.mainImage, link: `/proyectos/${p.id}` }));

  return (
    <div className="flex min-h-screen flex-col font-play">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] md:h-[65vh] w-full bg-black">
          <Image
            src={project.mainImage}
            alt={`Imagen destacada de ${project.title}`}
            fill
            className="object-cover opacity-60" // Ligera opacidad para que el texto resalte
            priority
            quality={80}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="max-w-3xl">
              <span className="bg-amarillo text-primary px-3 py-1 text-sm font-semibold rounded uppercase tracking-wider">
                Proyecto Destacado
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-2 drop-shadow-lg">
                {project.title}
              </h1>
              {project.location && (
                <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                  <FaMapMarkerAlt className="inline mr-2 mb-1" />{" "}
                  {project.location}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <article className="lg:col-span-8 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 !mt-0">
                  Descripción del Proyecto
                </h2>
                {project.description}
              </article>

              <aside className="lg:col-span-4 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    Ficha Técnica
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {project.year && (
                      <li className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-primary" />{" "}
                        <strong>Año:</strong>{" "}
                        <span className="ml-1">{project.year}</span>
                      </li>
                    )}
                    <li className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-primary" />{" "}
                      <strong>Ubicación:</strong>{" "}
                      <span className="ml-1">{project.location}</span>
                    </li>
                    {project.client && (
                      <li className="flex items-center">
                        <strong>Cliente:</strong>{" "}
                        <span className="ml-1">{project.client}</span>
                      </li>
                    )}
                    <li className="flex items-center">
                      <FaTag className="mr-2 text-primary" />{" "}
                      <strong>Categoría:</strong>
                      <Link
                        href={`/proyectos?filter=${project.category}`} // Asumiendo que tendrás un filtro en la página de proyectos
                        className="ml-1 capitalize text-amarillo hover:underline"
                      >
                        {project.category === "medio-ambiente"
                          ? "Medio Ambiente"
                          : project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                      </Link>
                    </li>
                  </ul>
                </div>

                {project.servicesProvided &&
                  project.servicesProvided.length > 0 && (
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">
                        Servicios Prestados
                      </h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {project.servicesProvided.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <FaTools className="mr-2 mt-1 text-primary flex-shrink-0" />{" "}
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </aside>
            </div>

            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="mt-12 md:mt-16">
                <UnderlinedHeading
                  as="h2"
                  className="text-2xl md:text-3xl"
                  paddingBottom="pb-3"
                >
                  Galería de Imágenes
                </UnderlinedHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {project.galleryImages.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Imagen de galería ${index + 1} para ${
                          project.title
                        }`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Podrías agregar un overlay o un ícono de zoom al hacer hover si quieres */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <UnderlinedHeading
              as="h2"
              className="text-2xl md:text-3xl"
              paddingBottom="pb-3"
            >
              Descubra Otros Proyectos
            </UnderlinedHeading>
            <div className="mt-2">
              <RollingGallery
                images={otherProjectsForGallery}
                autoplay={true}
                pauseOnHover={true}
              />
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="default" size="lg">
                <Link href="/proyectos">Ver Todos los Proyectos</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
