import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const contactDetails = [
  { label: "Name", value: "Your Name" },
  { label: "GitHub", value: "github.com/your-username", href: "https://github.com/your-username" },
  { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
  { label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
];

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col text-neutral-950">
      <Navbar />
      <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-950">Let&apos;s talk</p>
        <h1 className="mt-4 text-4xl font-bold text-neutral-950 sm:text-5xl">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600 sm:mt-6">
          Interested in working together? Get in touch using any of the details below.
        </p>
        <div className="mt-8 grid max-w-3xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {contactDetails.map((detail) => (
            <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm sm:p-5" key={detail.label}>
              <p className="text-sm font-medium text-neutral-500">{detail.label}</p>
              {detail.href ? (
                <a className="mt-2 inline-block break-words font-semibold text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950" href={detail.href}>
                  {detail.value}
                </a>
              ) : (
                <p className="mt-2 font-semibold text-neutral-950">{detail.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}