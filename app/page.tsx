import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
// import Contact from "@/components/contact";
// import Experience from "@/components/experience";
// import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </main>
  );
}