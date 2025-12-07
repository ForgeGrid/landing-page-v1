import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel/carousel";
import TeamMemberSection from "./TeamMemberSection";

interface TeamPageProps {
  gravityOn?: boolean;
}

export default function TeamPage({ gravityOn = true }: TeamPageProps) {
  const members = [
    {
      id: "sukesh",
      name: "Sukesh",
      role: "Frontend Engineer",
      description: "Expert in UI/UX, motion systems, and clean interfaces.",
      glowColor: "132, 0, 255",
    },
    {
      id: "sharan",
      name: "Sharan",
      role: "Backend Engineer",
      description: "API, DB, cloud systems architect.",
      glowColor: "0, 200, 255",
    },
    {
      id: "venkat",
      name: "Venkat",
      role: "AI/ML Engineer",
      description: "RAG systems, vector search, embeddings expert.",
      glowColor: "255, 120, 0",
    },
  ];

  return (
    <>
      <Carousel>
        <CarouselContent>
          {members.map((m) => (
            <CarouselItem>
              <TeamMemberSection
                key={m.id}
                externalGravity={gravityOn}
                member={m}
                sectionId={m.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
