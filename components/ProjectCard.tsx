type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="text-xl font-semibold text-neutral-950">{title}</h2>
      <p className="mt-3 leading-7 text-neutral-600">{description}</p>
      {href && <a className="mt-5 inline-block font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950" href={href}>View project <span aria-hidden="true">→</span></a>}
    </article>
  );
}