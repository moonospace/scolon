import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title:
        "Top Developer Newsletter, Courses, Community & Resources | Scolon",
      description:
        "Top place to learn and growing development skills, career, business and learn to become better developers",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
