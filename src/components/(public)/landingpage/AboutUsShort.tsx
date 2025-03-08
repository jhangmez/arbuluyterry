// components/AboutUsShort.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Image

const AboutUsShort = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 font-play">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-2">
            Acerca de Arbulú & Terry SAC
          </h2>
          <h3 className="text-xl mb-4">Quiénes Somos</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Arbulú & Terry SAC es una empresa peruana especializada en
              proyectos urbano-ambientales, con un equipo multidisciplinario de
              arquitectos, ingenieros y planificadores urbanos.<br></br>{" "}
              Ofrecemos soluciones integrales en estudios ambientales,
              planificación urbana e infraestructura en todo el Perú.
            </p>
            <Button asChild className="w-full md:w-auto">
              <Link href="/nosotros">Conozca Más</Link>
            </Button>
          </div>
          {/* Image (Optional) */}
          <div className="md:w-1/2 flex items-center justify-center">
            <Image
              src="/images/arbuluyterry.webp" // Replace with your actual image path
              alt="Arbulú & Terry SAC"
              width={200} // Adjust as needed
              height={200} // Adjust as needed
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsShort;
