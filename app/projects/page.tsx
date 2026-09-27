import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col text-neutral-950">
      <Navbar />
      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-950">Selected work</p>
        <h1 className="mt-4 text-4xl font-bold text-neutral-950 sm:text-5xl">Projects</h1>
        <p className="mt-4 text-lg leading-8 text-neutral-600 sm:mt-6">A selection of software, game, and web projects.</p>
        <div className="mt-8 grid w-full gap-5 sm:mt-10">
          <ProjectCard
            title="SaaS Dynamic Points and Rewards System"
            description="Designed and developed a scalable SaaS rewards system with configurable point earning and redemption. Added transaction history and audit logging for secure, traceable reward management."
          />
          <ProjectCard
            title="DND: Dungeon Survival"
            description="Developed a 2D action roguelite in Godot 4 using GDScript, with procedural enemies, multiple game modes, progression, enemy behaviors, and combat mechanics."
          />
          <ProjectCard
            title="Solace"
            description="Built a full-stack mental health support platform with an AI assistant, mood tracking, journaling, and personalized well-being resources using Next.js, Django, and PostgreSQL."
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}