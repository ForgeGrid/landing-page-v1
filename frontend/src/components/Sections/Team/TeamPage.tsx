import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/Carousel/carousel.tsx";
import TeamMemberSection from "./TeamMemberSection.tsx";

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
          <CarouselItem>
            <TeamMemberSection
              externalGravity={gravityOn}
              member={members[0]}
              sectionId={members[0].id}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}
