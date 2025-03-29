"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const IMGS: ImageItem[] = [
  {
    url: "/images/BANCOINTERAMERICANODEFINANZAS-BANBIF-CHICLAYO.webp",
    link: "/proyectos/banbif-chiclayo",
  },
  {
    url: "/images/CLUBSOCIALANCASHYEDIFICIODEOFICINAS-JESUSMARIA-LIMA.webp",
    link: "/proyectos/club-social",
  },
  {
    url: "/images/DECLARACIONDEIMPACTOAMBIENTALDELAPTARDELCAMPAMENTOOCCIDENTEDELPROYECTOTRASVASEOLMOS.webp",
    link: "/proyectos/olmos-occidente",
  },
  {
    url: "/images/DECLARACIONDEIMPACTOAMBIENTALDELAPTARDELCAMPAMENTOORIENTEDELPROYECTOTRASVASEOLMOS.webp",
    link: "/proyectos/olmos-oriente",
  },
  {
    url: "/images/EDIFICIODEOFICINASSANTAVICTORIA-CHICLAYO.webp",
    link: "/proyectos/santa-victoria",
  },
  {
    url: "/images/EDIFICIOEMPRESARIALSAN-PEDRO-CHICLAYO.webp",
    link: "/proyectos/san-pedro",
  },
  {
    url: "/images/EstudiodeImpactoAmbientaldeRedesdeAguaPotableydeAlcantarilladodelaCiudaddeFerreñafe.webp",
    link: "/proyectos/ferrenafe",
  },
  {
    url: "/images/EstudiodeImpactoAmbientaldeRedesdeAguaPotableydeAlcantarilladodelaCiudaddeLambayeque.webp",
    link: "/proyectos/lambayeque",
  },
  { url: "/images/HOTELOLMOS-LAMBAYEQUE.webp", link: "/proyectos/hotel-olmos" },
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: ImageItem[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);
  const [isScreenSizeMd, setIsScreenSizeMd] = useState<boolean>(false);
  const [isScreenSizeLg, setIsScreenSizeLg] = useState<boolean>(false);
  const [isScreenSizeXl, setIsScreenSizeXl] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640); // sm: <= 640px
      setIsScreenSizeMd(window.innerWidth > 640 && window.innerWidth < 1024); // md: 641px - 1023px
      setIsScreenSizeLg(window.innerWidth >= 1024 && window.innerWidth < 1280); // lg: 1024px - 1279px
      setIsScreenSizeXl(window.innerWidth >= 1280); // xl: >= 1280px
    };

    checkScreenSize();
    const handleResize = () => checkScreenSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3D geometry calculations.  Conditionally set cylinderWidth.
  const cylinderWidth: number = isScreenSizeSm
    ? 1100
    : isScreenSizeMd
    ? 1800
    : isScreenSizeLg
    ? 2200
    : isScreenSizeXl
    ? 2600
    : 1800; // Default to 1800 if none match
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: any) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 h-full w-[48px] z-10" />
      <div className="absolute top-0 right-0 h-full w-[48px] z-10" />
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((item, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <div className="relative h-[120px] w-[300px] rounded-[15px] sm:h-[100px] sm:w-[220px] overflow-hidden">
                <Image
                  width={300}
                  height={120}
                  src={item.url}
                  alt="gallery"
                  className="pointer-events-none h-full w-full border-[3px] border-white object-cover transition-transform duration-300 ease-out"
                />
                <Link href={item.link} passHref legacyBehavior>
                  <a className="absolute inset-0 flex items-center justify-center rounded-[15px] bg-black bg-opacity-0 transition-all duration-300 ease-out group-hover:bg-opacity-50">
                    <span className="text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 font-play">
                      Ver Proyecto
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
