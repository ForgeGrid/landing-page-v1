import HorizontalCarousel from "../../ui/HorizontalCarousel/HorizontalCarousel";
import TeamMemberSection from "./TeamMemberSection";

export default function TeamPage() {
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
    {
      id: "madhan",
      name: "Madhan",
      role: "Full-stack Developer",
      description: "Connects frontend + backend with high-quality code.",
      glowColor: "0, 255, 100",
    }
  ];

  return (
    <>
      {members.map(m => (
        <TeamMemberSection key={m.id} member={m} sectionId={m.id} />
      ))}
    </>
  );
}
