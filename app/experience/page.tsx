import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Experience() {
  return (
    <main className="flex min-h-screen flex-col text-neutral-950">
      <Navbar />
      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-950">My journey</p>
        <h1 className="mt-4 text-4xl font-bold text-neutral-950 sm:text-5xl">Experience</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600 sm:mt-6">My professional experience and the skills I&apos;ve developed along the way.</p>
        <article className="mt-8 max-w-2xl rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:mt-10 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-950">University Internship</p>
          <h2 className="mt-3 text-xl font-semibold text-neutral-950">Radice Center · Intern</h2>
          <p className="mt-2 text-sm text-neutral-500">March 2025 – March 2026</p>
          <p className="mt-4 leading-7 text-neutral-600">
            Tested AutoCert, a university certificate management system, ahead of its showcase. Reported bugs
            and documented issues to help the team prepare the project for presentation.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}