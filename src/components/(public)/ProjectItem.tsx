"use client";
// components/ProjectItem.tsx
import React, { useState } from "react";
import Image from "next/image";

// Define la estructura esperada para cada proyecto
interface Project {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  location?: string; // Puede ser opcional o una cadena vacía
}

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { id, title, content, imageSrc, location } = project;
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  return (
    <section
      id={id}
      className="py-8 md:py-12 scroll-mt-20 font-play"
      aria-labelledby={`project-title-${id}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-start gap-6 md:gap-8">
          {/* Columna de Imagen */}
          <div className="w-full md:w-2/5 lg:w-1/3 flex-shrink-0">
            {/* Container for image and placeholder */}
            <div className="relative overflow-hidden aspect-video md:aspect-square lg:aspect-video rounded">
              {/* Flashing Placeholder - Conditionally Rendered */}
              {isLoading && (
                <div
                  className="absolute inset-0 animate-flash-loading rounded" // Apply the custom flash animation
                ></div>
              )}

              {/* Actual Image */}
              <Image
                src={imageSrc}
                alt={`Imagen del proyecto: ${title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                className={`
                  absolute inset-0 object-cover rounded
                  transition-opacity duration-300 ease-out  // Faster fade-in after flash
                  ${
                    isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                  } // Hide image while loading & flashing
                `}
                onLoad={() => setIsLoading(false)} // Stop flash and show image on load
                priority={false}
                quality={75}
              />
            </div>
          </div>

          {/* Columna de Texto */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <h3
              id={`project-title-${id}`}
              className="text-xl lg:text-2xl font-semibold mb-3 uppercase"
            >
              {title}
            </h3>
            <p className="text-base text-gray-700 mb-4">{content}</p>
            {location && location.trim() !== "" && (
              <p className="text-sm text-gray-500">
                <span className="font-medium">Lugar:</span> {location}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
