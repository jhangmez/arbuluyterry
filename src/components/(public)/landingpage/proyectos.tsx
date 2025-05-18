"use client";
import RollingGallery from "@/components/ui/RollingGallery"; // Asegúrate que la ruta a RollingGallery sea correcta
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Asegúrate que la ruta a Button sea correcta
import { FaArrowRight } from "react-icons/fa";

export function ProyectosSection() {
  return (
    <section className="py-12 md:py-16 font-play bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-shadow-lg text-3xl font-bold sm:text-4xl md:text-5xl capitalize mb-8 md:mb-12 text-gray-800">
          Nuestros Proyectos Destacados
        </h2>
        <div className="px-0 md:px-4 lg:px-8">
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
        <div className="mt-10 md:mt-14 text-center">
          <Button asChild size="lg" variant="default">
            <Link href="/proyectos" className="inline-flex items-center">
              Ver Todos los Proyectos
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
