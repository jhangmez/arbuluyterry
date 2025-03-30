// types.d.ts

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
  
  type ImageItem = {
    url: string;
    link: string;
  };

  interface Project {
    id: string;
    title: string;
    content: string;
    imageSrc: string;
    location?: string;
  }

