import { Header } from "@/components/(public)/header";
import { Footer } from "@/components/(public)/footer";
import { WhatsAppButton } from "@/components/(public)/landingpage/whatsapp-button";
import { projectsData } from "@/app/routes";
import ProjectItem from "@/components/(public)/ProjectItem";
import UnderlinedHeading from "@/components/(public)/UnderlinedHeading";

export default function Proyectos() {
  const typedProjectsData: Project[] = projectsData;
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <UnderlinedHeading as="h1" className="text-3xl" paddingBottom="pb-2">
            Consultorías y Proyectos Realizados
          </UnderlinedHeading>

          <div className="space-y-8 md:space-y-12">
            {typedProjectsData.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
