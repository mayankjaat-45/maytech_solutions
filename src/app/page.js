import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "MayTech Solution | Website Development Agency",
  description:
    "MayTech Solution builds modern, responsive and SEO-friendly websites using Next.js, React.js and Tailwind CSS.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <ContactCTA />
    </main>
  );
}
