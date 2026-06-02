export const metadata = {
  title: "About Us | MayTech Solutions",
  description:
    "Learn about MayTech Solutions, a modern web development agency helping businesses grow online.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--bg-main) pb-20 pt-28 text-(--text-main)">
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-(--primary-soft) blur-[110px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-(--secondary-soft) blur-[110px]" />

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-(--primary-dark)">
              About MayTech Solutions
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight text-(--secondary) md:text-6xl">
              We build modern websites that help businesses grow online.
            </h1>

            <p className="text-lg leading-relaxed text-(--text-muted)">
              MayTech Solutions is a digital service agency focused on building
              fast, responsive, and SEO-friendly websites for startups, local
              businesses, agencies, and growing brands.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Modern Design",
                text: "We create clean, premium and conversion-focused website interfaces.",
              },
              {
                title: "Performance Focused",
                text: "Our websites are optimized for speed, SEO and mobile experience.",
              },
              {
                title: "Business Growth",
                text: "We design websites that build trust and generate enquiries.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,153,0,0.4)] hover:shadow-(--shadow-medium)"
              >
                <h3 className="mb-3 text-xl font-bold text-(--secondary)">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-(--text-muted)">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-4xl border border-[rgba(255,153,0,0.2)] bg-(--bg-warm) p-8 shadow-(--shadow-soft) md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-(--primary-dark)">
              Our Mission
            </p>

            <h2 className="mb-4 text-3xl font-black text-(--secondary)">
              Helping businesses build a strong digital presence.
            </h2>

            <p className="max-w-4xl leading-relaxed text-(--text-muted)">
              Our mission is to help businesses create a strong digital presence
              through professional websites, SEO optimization, modern UI/UX and
              performance-driven development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
