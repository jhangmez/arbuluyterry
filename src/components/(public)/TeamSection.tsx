"use client";
// components/TeamSection.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { apiImage } from "@/utils/imageapi"; // Assuming this utility exists

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

  // Determine the grid layout based on the number of members to display.
  // Keep your existing logic for gridColsClass
  let gridColsClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"; // Default or calculated

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className={`grid ${gridColsClass} gap-8 justify-items-center`}>
          {membersToDisplay.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-xs font-play" // Added font-play
            >
              {/* Parent div MUST have position: relative for fill to work correctly */}
              <div className="relative w-48 h-48 mb-4">
                <Image
                  // Use your apiImage utility or directly the src
                  src={
                    apiImage
                      ? apiImage(member.imageUrl)
                      : member.imageUrl ?? "/images/user.webp"
                  } // Added fallback placeholder
                  alt={member.name}
                  fill
                  // Add the sizes prop here
                  sizes="192px" // Corresponds to w-48 (12rem * 16px/rem = 192px)
                  className="object-cover rounded-full"
                  style={{ objectFit: "cover" }}
                  priority={false} // Set priority=true only for above-the-fold images
                  quality={75} // Default quality
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
        {showButton && (
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
