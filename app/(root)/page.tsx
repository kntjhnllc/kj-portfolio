import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <section className="w-full">
      <Hero/>
      <About/>
      <Projects/>
    </section>
  );
}
