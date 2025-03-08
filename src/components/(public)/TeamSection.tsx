"use client";
// components/TeamSection.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  let gridColsClass = "";
  if (membersToDisplay.length === 1) {
    gridColsClass = "grid-cols-1"; // 1 column for 1 member
  } else if (membersToDisplay.length === 2) {
    gridColsClass = "sm:grid-cols-2"; // 2 columns for 2 members (on small screens and up)
  } else {
    gridColsClass = "sm:grid-cols-2 lg:grid-cols-3"; // Up to 3 columns (2 on small, 3 on large)
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {" "}
        {/* Added px-4 for horizontal padding */}
        <div
          className={`grid ${gridColsClass} gap-8 justify-items-center`} // Added justify-items-center
        >
          {membersToDisplay.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-xs font-play"
            >
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                  style={{ objectFit: "cover" }}
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
