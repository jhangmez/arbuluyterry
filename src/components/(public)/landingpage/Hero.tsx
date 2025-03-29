// components/(public)/landingpage/Hero.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3900,
    arrows: false,
  };

  const slides = [
    {
      title: "Comprometidos con el Desarrollo Sostenible",
      subtitle:
        "Impulsamos proyectos urbanos y ambientales que respetan el entorno y mejoran la calidad de vida en Perú.",
      imageUrl: "/images/EDIFICIOEMPRESARIALSAN-PEDRO-CHICLAYO.webp",
      buttonText: "Nuestros Servicios",
      buttonLink: "/servicios",
    },
    {
      title: "Expertos en Estudios de Impacto Ambiental",
      subtitle:
        "Evaluamos y mitigamos los impactos ambientales de tus proyectos, garantizando el cumplimiento normativo y la protección del medio ambiente.",
      imageUrl:
        "/images/Estudio-de-Impacto-Ambiental-del-PROYECTO-MEJORAMIENTO-DE-PISTAS-Y-VEREDAS-EN-LA-LOCALIDAD-DE-AYABAC.webp",
      buttonText: "Ver Estudios",
      buttonLink: "/servicios#impacto-ambiental",
    },
    {
      title: "Líderes en Planificación Urbana Estratégica",
      subtitle:
        "Diseñamos planes de desarrollo urbano integrales, considerando la infraestructura, el medio ambiente y las necesidades de la comunidad.",
      imageUrl:
        "/images/HABILITACION-URBANA-DE-LA-EMPRESA-AGROINDUSTRIAL-POMALCA-S.A.A.webp",
      buttonText: "Ver Proyectos Urbanos",
      buttonLink: "/proyectos#urbano",
    },
    {
      title: "Más de 25 Años de Trayectoria",
      subtitle:
        "Nuestra experiencia y conocimiento técnico nos avalan como una empresa confiable y líder en el sector de la consultoría ambiental y urbana.",
      imageUrl: "/images/BAGUA-AMAZONAS.webp",
      buttonText: "Conózcanos",
      buttonLink: "/nosotros",
    },
    {
      title: "Consultoría Integral para un Futuro Mejor",
      subtitle:
        "Ofrecemos soluciones personalizadas y eficientes para cada proyecto, desde la concepción hasta la ejecución, promoviendo la sostenibilidad.",
      imageUrl: "/images/CIUDAD-LAMBAYEQUE.webp",
      buttonText: "Contáctenos",
      buttonLink: "/contacto",
    },
  ];

  const slideHeight = "h-[calc(100vh-4rem)] lg:h-[calc(100vh)]";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${slideHeight}`}
    >
      <Slider {...settings} className="w-full">
        {slides.map((slide, index) => (
          <div key={index} className={`relative ${slideHeight}`}>
            <div className="absolute inset-0">
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 pt-28 flex flex-col items-center justify-center lg:px-48 px-4 text-center h-full font-play">
              <h1 className="text-shadow-lg text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl capitalize">
                {slide.title}
              </h1>
              <h2 className="text-shadow-md text-lg text-white sm:text-xl md:text-2xl mt-2">
                {slide.subtitle}
              </h2>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
