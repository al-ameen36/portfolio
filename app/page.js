import About from "@/app/components/about/about";
import Banner from "@/app/components/banner/banner";
import Education from "@/app/components/education/education";
import Projects from "@/app/components/projects/projects";
import Skills from "@/app/components/skills/skills";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
