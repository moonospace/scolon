import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Level Up Your Devs Skills | The Scolon",
      description:
        "Top place to learn and growing development skills, career, business and learn to become better developers",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
