import aboutStyles from "./about.module.scss";

export default function About() {
  return (
    <section id={aboutStyles.about} aria-labelledby="about_me_title">
      <h2 id="about_me_title" className="section_title">
        about me
      </h2>
      <p>
        Hi, i&apos;m Muhammad Al-Ameen. i&apos;m a frontend developer with a
        strong coding background and great eye for design.
      </p>
      <p>
        I like solving problems with code and i always look forward to those
        &quot;Aha !&quot; moments when problem solving. I&apos;m always open to
        opportunities to improve and learn new skills (not just tech related).
      </p>
    </section>
  );
}
