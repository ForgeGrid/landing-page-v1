import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
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
    <div className="relative w-full py-12 overflow-hidden">
      <Carousel opts={{ align: "start", loop: true }} orientation="horizontal" className="w-full">
        {/* Navigation Arrows at Top */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
          <CarouselPrevious className="text-white pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition rounded-full" />
          <CarouselNext className="text-white pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition rounded-full" />
        </div>
        <CarouselContent className="flex touch-pan-y">
          {members.map((member) => (
            <CarouselItem key={member.id} className="min-w-full md:min-w-[100%] lg:min-w-[100%] basis-full">
              <TeamMemberSection
                externalGravity={gravityOn}
                member={member}
                sectionId={member.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
