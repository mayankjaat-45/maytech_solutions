const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    text: "We understand your business, goals, services, design preference and website requirements.",
  },
  {
    number: "02",
    title: "Design & Structure",
    text: "We plan the website sections, content flow and visual direction.",
  },
  {
    number: "03",
    title: "Development",
    text: "We build your website using Next.js, React.js and Tailwind CSS.",
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "We deploy your website, connect domain, setup SEO basics and provide support.",
  },
];

export default function Process() {
  return (
    <section className="section-padding relative overflow-hidden bg-white text-(--text-main)">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />

      <div className="container-custom relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
            Our Process
          </p>

          <h2 className="text-3xl font-black leading-tight text-(--secondary) md:text-5xl">
            Simple process from idea to launch.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-(--text-muted)">
            We follow a clear step-by-step process to plan, design, develop and
            launch your website smoothly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
            >
              <p className="mb-8 text-5xl font-black text-[rgba(255,153,0,0.18)] transition group-hover:text-[rgba(255,153,0,0.32)]">
                {step.number}
              </p>

              <h3 className="mb-3 text-xl font-black text-(--secondary)">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-(--text-muted)">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
