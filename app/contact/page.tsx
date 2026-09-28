import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const contactDetails = [
  { label: "Name", value: "Hongkhy Kong" },
  { label: "GitHub", value: "github.com/hongkhy", href: "https://github.com/hongkhy" },
  { label: "Email", value: "hongkhy017549@gmail.com", href: "mailto:hongkhy017549@gmail.com" },
  { label: "Phone", value: "+885 99 753 099", href: "tel:+88599753099" },
];

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col text-neutral-950">
      <Navbar />
      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">Let&apos;s talk</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">Contact</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            I&apos;m open to freelance work, collaborations, and opportunities where I can build practical digital products and meaningful experiences.
          </p>
        </div>

        <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {contactDetails.map((detail) => (
            <div
              className="min-w-0 rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
              key={detail.label}
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  className="mt-3 inline-block break-words text-lg font-semibold text-neutral-950 underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-emerald-800 hover:decoration-emerald-700"
                  href={detail.href}
                  rel="noreferrer"
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-3 text-lg font-semibold text-neutral-950">{detail.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">Availability</p>
          <p className="mt-3 text-base leading-7 text-neutral-700">
            Available for selected freelance projects, internships, and software roles. If you want to discuss a project, send a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}