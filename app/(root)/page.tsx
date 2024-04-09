import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <section className="w-full">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </section>
  );
}
