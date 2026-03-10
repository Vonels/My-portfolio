import css from "./About.module.css";

export default function About() {
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

          <h2 className={css.subtitle}>Tech Stack</h2>

          <div className={css.skills}>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Git</span>
          </div>

          <h2 className={css.subtitle}>Education</h2>

          <div className={css.education}>
            <p>
              <b>2025 – 2026</b> IT School GoIT — Fullstack Developer
            </p>
            <p>
              <b>2017 – 2021</b> Sumy National Agrarian University
            </p>
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

      {/* SOFT SKILLS */}

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Soft Skills</h2>

        <div className={css.skills}>
          <span>Problem solving</span>
          <span>Team communication</span>
          <span>Fast learner</span>
          <span>Responsibility</span>
        </div>
      </div>

      {/* CTA */}

      <div className={css.cta}>
        <h2>Lets work together</h2>
        <p>If you are looking for a developer, feel free to contact me.</p>

        <button className={css.button}>Contact Me</button>
      </div>
    </section>
  );
}
