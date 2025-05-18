// components/(public)/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectDetail } from "@/lib/projectsData"; // O la ruta correcta a tu interfaz/datos
import { FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  project: ProjectDetail;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Tomar solo el primer párrafo de la descripción si es un string largo
  // o si es ReactNode, tendrías que manejarlo diferente o pasar un 'shortDescription'
  let shortDescription = "";
  if (typeof project.description === "string") {
    shortDescription = project.description.split("\n\n")[0]; // Toma el primer párrafo
    if (shortDescription.length > 120) {
      // Acorta si es muy largo
      shortDescription = shortDescription.substring(0, 117) + "...";
    }
  } else {
    // Si la descripción es ReactNode, necesitarías una forma de obtener un resumen
    // o agregar un campo 'shortDescription' a tus datos.
    // Por ahora, si es ReactNode, podríamos mostrar los primeros servicios.
    if (project.servicesProvided.length > 0) {
      shortDescription =
        project.servicesProvided.slice(0, 2).join(", ") +
        (project.servicesProvided.length > 2 ? "..." : "");
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group h-full font-play">
      <Link
        href={`/proyectos/${project.id}`}
        className="block relative w-full aspect-[16/10] overflow-hidden"
      >
        <Image
          src={project.mainImage}
          alt={`Imagen de ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <h3 className="text-white text-lg font-semibold drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:hidden">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-grow">
          {shortDescription}
        </p>
        <div className="mt-auto pt-3 border-t border-gray-200">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-amarillo group-hover:text-primary group-hover:border-amarillo"
          >
            <Link href={`/proyectos/${project.id}`}>
              Ver Proyecto <FaArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
