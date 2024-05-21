import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Journal />
      <Contact />
    </section>
  );
}
