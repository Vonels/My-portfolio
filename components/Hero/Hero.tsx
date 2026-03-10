import Image from "next/image";
import css from "../Hero/Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.blockleft}>
          <h1 className={css.title}>
            Hi, I'm <br />
            Vlad <span>Nesterenko</span>
          </h1>
          <h2 className={css.doptitle}>Fullstack Developer</h2>
          <p className={css.description}>
            I build modern web applications using
          </p>

          <p className={css.stack}>
            <span className={css.next}>Next.js</span>,{" "}
            <span className={css.react}>React</span>,{" "}
            <span className={css.node}>Node.js</span> &{" "}
            <span className={css.mongo}>MongoDB</span>
          </p>

          <div className={css.morebutton}>
            <button className={css.btnproject}>View Project</button>
            <button className={css.btngit}>GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
}
