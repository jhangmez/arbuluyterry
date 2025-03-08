// components/(public)/landingpage/Hero.tsx (No changes needed here)
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
      text: "COMPROMETIDOS CONTIGO Y CON EL MEDIO AMBIENTE",
      imageUrl: "/images/hero/peru1.webp",
      buttonText: "Solicitar Servicios",
      buttonLink: "/servicios",
    },
    {
      text: "Texto del Slide 2",
      imageUrl: "/images/hero/peru2.webp",
      buttonText: "Ver Proyectos",
      buttonLink: "/proyectos",
    },
    {
      text: "Texto del Slide 3",
      imageUrl: "/images/hero/peru3.webp",
      buttonText: "Ver Proyectos",
      buttonLink: "/proyectos",
    },
    {
      text: "Texto del Slide 4",
      imageUrl: "/images/hero/peru4.webp",
      buttonText: "Ver Proyectos",
      buttonLink: "/proyectos",
    },
    {
      text: "Texto del Slide 5",
      imageUrl: "/images/hero/peru5.webp",
      buttonText: "Ver Proyectos",
      buttonLink: "/proyectos",
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
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center h-full">
              <h1 className="text-shadow-lg text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {slide.text}
              </h1>
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
