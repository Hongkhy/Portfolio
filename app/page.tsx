import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";

const skills = [
	{ name: "Software development" },
	{ name: "Web development" },
	{ name: "Front-end development" },
	{ name: "Back-end development" },
	{ name: "Building practical projects" },
];

const technologies = [
	{ name: "React", image: "/images/skills/react.png" },
	{ name: "Laravel", image: "/images/skills/laravel.png" },
	{ name: "Django", image: "/images/skills/django.png" },
	{ name: "JavaScript", image: "/images/skills/javaScript.png" },
	{ name: "TypeScript", image: "/images/skills/typeScript.png" },
	{ name: "Cloud Hosting", image: "/images/skills/digitalOcean.png" },
	{ name: "SpringBoot", image: "/images/skills/springBoot.png" },
	{ name: "Godot Engine", image: "/images/skills/godot.png" },
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col text-neutral-950">
			<Navbar />
			<section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 sm:gap-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16 lg:px-8 lg:py-16 xl:px-10">
				<div className="max-w-2xl">
					<p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
						Portfolio <span className="ml-2 text-neutral-400">/ 2026</span>
					</p>
					<h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-7xl">
						Welcome to my portfolio.
					</h1>
					<p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
						I&apos;m Hongkhy Kong, a Computer Science graduate building thoughtful digital experiences with modern web technologies.
					</p>
					<div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
						<Link className="inline-flex items-center gap-3 bg-neutral-950 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-800 sm:px-5" href="/projects">
							Explore projects <span aria-hidden="true">↗</span>
						</Link>
						<a className="inline-flex items-center gap-3 border border-neutral-300 bg-white/80 px-4 py-3 font-semibold text-neutral-900 transition-colors hover:border-neutral-950 sm:px-5" href="/cv.pdf" download="Hongkhy-Kong-CV.pdf">
							Download CV <span aria-hidden="true">↓</span>
						</a>
					</div>
				</div>
				<figure className="mx-auto w-full max-w-sm border border-neutral-200 bg-white p-3 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] sm:p-4">
					<div className="mb-3 flex items-center justify-between font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
						<span>Profile</span>
						<span>01 / 01</span>
					</div>
					<div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
						<Image
							alt="Portrait of Hongkhy Kong"
							className="object-cover"
							fill
							priority
							sizes="(min-width: 1024px) 352px, (min-width: 640px) 384px, 80vw"
							src="/images/profile/profile-removebg.png"
						/>
					</div>
					<figcaption className="flex items-center justify-between gap-3 pt-3 text-sm">
						<span className="font-semibold text-neutral-950">Hongkhy Kong</span>
						<span className="text-neutral-500">Developer</span>
					</figcaption>
				</figure>
			</section>
			<section className="mx-auto w-full max-w-6xl scroll-mt-8 border-t border-neutral-200 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 xl:px-10" aria-labelledby="about-heading" id="about">
				<div className="grid gap-4">
					<div>
						<p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">About</p>
						<div className="min-w-0">
						<h2 className="text-2xl font-semibold text-neutral-950" id="about-heading">Curious by nature, focused on building.</h2>
						<p className="mt-4 leading-7 text-neutral-600">
							I&apos;m a recent Computer Science graduate with a strong interest in software and web development. I enjoy working across front-end and back-end technologies, learning new tools, and turning ideas into practical projects. I&apos;m also interested in cloud computing, game development, and IoT.
						</p>
						<h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500" id="skills-heading">Skills</h3>
						<div aria-labelledby="skills-heading" className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
							{skills.map(({ name }) => <SkillCard key={name} kind="skill" name={name} />)}
						</div>
						<h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500" id="technologies-heading">Technologies</h3>
						<div aria-labelledby="technologies-heading" className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
							{technologies.map(({ name, image }) => <SkillCard image={image} key={name} kind="technology" name={name} />)}
						</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
