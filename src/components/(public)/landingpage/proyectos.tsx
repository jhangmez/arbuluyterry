"use client";
import RollingGallery from "@/components/ui/RollingGallery";

export function ProyectosSection() {
  return (
    <section className="py-8 md:py-12">
      <h1 className="font-play text-center text-shadow-lg text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl capitalize mb-6 md:mb-8">
        Nuestros proyectos
      </h1>
      <div className="px-4 md:px-8 lg:px-16 xl:px-24">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
}
