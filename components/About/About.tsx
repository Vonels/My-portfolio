import css from "./About.module.css";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

export default function About() {
  const stack = [
    { name: "Next.js", icon: <SiNextdotjs />, class: "next" },
    { name: "React", icon: <SiReact />, class: "react" },
    { name: "TypeScript", icon: <SiTypescript />, class: "ts" },
    { name: "Node.js", icon: <SiNodedotjs />, class: "node" },
    { name: "MongoDB", icon: <SiMongodb />, class: "mongo" },
    { name: "JavaScript", icon: <SiJavascript />, class: "js" },
    { name: "HTML5", icon: <SiHtml5 />, class: "html" },
  ];

  return (
    <section className={css.about}>
      <div className={css.container}>
        <div className={css.left}>
          <img src="/me.png" alt="Vlad Nesterenko" className={css.photo} />
        </div>

        <div className={css.right}>
          <h1 className={css.title}>About Me</h1>

          <p className={css.text}>
            I am a Junior Frontend Developer with experience building responsive
            web applications using React, Next.js and TypeScript. I enjoy
            solving problems, creating clean UI and constantly improving my
            development skills.
          </p>

          <div className={css.section}>
            <h2 className={css.subtitle}>Tech Stack</h2>
          </div>

          <div className={css.list}>
            {stack.map((tech) => (
              <div key={tech.name} className={css.card}>
                <span className={`${css.icon} ${css[tech.class]}`}>
                  {tech.icon}
                </span>
                {tech.name}
              </div>
            ))}
          </div>

          <div className={css.section}>
            <h2 className={css.subtitle}>Education</h2>
          </div>

          <div className={css.education}>
            <p>
              <b>2025 – 2026</b> IT School GoIT — Fullstack Developer
            </p>
            <p>
              <b>2017 – 2021</b> Sumy National Agrarian University
            </p>
          </div>
          <div className={css.section}>
            <h2 className={css.sectionTitle}>Soft Skills</h2>

            <div className={css.skills}>
              <span>Problem solving</span>
              <span>Team communication</span>
              <span>Fast learner</span>
              <span>Responsibility</span>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Projects</h2>

        <div className={css.projects}>
          <div className={css.project}>
            <h3>NoteHub</h3>
            <p>
              Notes application with API integration and CRUD functionality.
            </p>
          </div>

          <div className={css.project}>
            <h3>ArtistHub</h3>
            <p>
              Platform for searching and exploring artists with dynamic content.
            </p>
          </div>

          <div className={css.project}>
            <h3>Expense Tracker</h3>
            <p>Finance management app built with Next.js and TypeScript.</p>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className={css.cta}>
        <p className={css.ctaTitle}>Let’s work together</p>

        <p className={css.ctaText}>
          If you are looking for a developer, feel free to contact me.
        </p>

        <button className={css.button}>Contact Me</button>
      </div>
    </section>
  );
}
