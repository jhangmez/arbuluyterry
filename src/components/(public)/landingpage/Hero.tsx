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
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    {
      title: "Comprometidos con el Desarrollo",
      subtitle: "Urbano y Ambiental Sostenible",
      imageUrl: "/images/hero/peru1.webp",
      buttonText: "Nuestros Servicios",
      buttonLink: "/servicios",
    },
    {
      title: "Especialistas en Estudios",
      subtitle: "De Impacto Ambiental",
      imageUrl: "/images/hero/peru2.webp",
      buttonText: "Ver Estudios",
      buttonLink: "/servicios#impacto-ambiental",
    },
    {
      title: "Planificación Urbana",
      subtitle: "Y Proyectos de Infraestructura",
      imageUrl: "/images/hero/peru3.webp",
      buttonText: "Ver Proyectos Urbanos",
      buttonLink: "/proyectos#urbano",
    },
    {
      title: "Más de 25 Años",
      subtitle: "De Experiencia en el Sector",
      imageUrl: "/images/hero/peru4.webp",
      buttonText: "Conózcanos",
      buttonLink: "/nosotros",
    },
    {
      title: "Consultoría Integral",
      subtitle: "Para un Futuro Sostenible",
      imageUrl: "/images/hero/peru5.webp",
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

            <div className="relative z-10 pt-10 flex flex-col items-center justify-center px-4 text-center h-full">
              <h1 className="text-shadow-lg text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl capitalize">
                {slide.title}
              </h1>
              <h2 className="text-shadow-md text-xl text-white sm:text-2xl md:text-3xl mt-2">
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
