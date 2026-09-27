import Image from "next/image";

type SkillCardProps = {
  name: string;
  image?: string;
  kind: "skill" | "technology";
};

export default function SkillCard({ name, image, kind }: SkillCardProps) {
  return (
    <article className={`group flex min-w-0 flex-col border border-neutral-200/80 p-3 shadow-[0_8px_22px_-16px_rgba(15,23,42,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-800/40 hover:shadow-[0_14px_28px_-14px_rgba(16,72,48,0.42)] sm:p-4 ${kind === "technology" ? "min-h-32 justify-between" : "min-h-20 justify-center"}`}>
      {kind === "technology" && image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image alt={`${name} logo`} className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" fill sizes="(min-width: 1024px) 125px, 40vw" src={image} unoptimized={name === "React"} />
        </div>
      )}
      <h2 className={`break-words text-base font-semibold text-neutral-950 ${kind === "technology" ? "mt-3" : "leading-5"}`}>{name}</h2>
    </article>
  );
}