"use client";
// components/TeamSection.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils"; // Import cn for conditional classes

gsap.registerPlugin(ScrollTrigger);

// Define TeamMember interface if not already defined globally or imported
interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
  maxMembersToShow?: number;
  showButton?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  teamMembers,
  maxMembersToShow = teamMembers.length,
  showButton = false,
}) => {
  const membersToDisplay = teamMembers.slice(0, maxMembersToShow);
  const isExactlyTwoMembers = membersToDisplay.length === 2;

  // Define clases base para el contenedor
  const containerBaseClasses = "gap-8";

  // Define clases condicionales para el layout
  const layoutClasses = isExactlyTwoMembers
    ? "flex flex-wrap justify-center items-start" // Usa Flexbox para centrar si son 2
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"; // Usa Grid si son 1 o más de 2

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Aplica las clases de layout dinámicamente */}
        <div className={cn(containerBaseClasses, layoutClasses)}>
          {membersToDisplay.map((member, index) => (
            <div
              key={index}
              // Ajusta el ancho máximo para que quepan bien en flex/grid
              className="flex flex-col items-center w-full max-w-sm md:max-w-xs font-play"
            >
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={member.imageUrl ?? "/images/user.webp"}
                  alt={member.name}
                  fill
                  sizes="192px" // w-48
                  className="object-cover rounded-full"
                  style={{ objectFit: "cover" }}
                  priority={false}
                  quality={75}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
                <p className="text-gray-700 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        {showButton && // Asegúrate que showButton funcione con la lógica de miembros > maxMembersToShow
          teamMembers.length > maxMembersToShow && (
            <div className="mt-8 text-center">
              <Button asChild className="font-play">
                <Link href="/equipo">Ver Más</Link>
              </Button>
            </div>
          )}
      </div>
    </section>
  );
};

export default TeamSection;
