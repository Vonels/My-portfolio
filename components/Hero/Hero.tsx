import Image from "next/image";
import css from "../Hero/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.blockleft}>
          <h1 className={css.title}>
            Hi, Im <br />
            Vlad <span>Nesterenko</span>
          </h1>
          <h2 className={css.doptitle}>Fullstack Developer</h2>
          <p className={css.description}>
            I build modern web applications using
          </p>

          <p className={css.stack}>
            <span className={css.next}>Next.js</span>,{" "}
            <span className={css.react}>React</span>,{" "}
            <span className={css.js}>JavaScript</span>,{" "}
            <span className={css.html}>HTML5</span>,{" "}
            <span className={css.node}>Node.js</span> &{" "}
            <span className={css.mongo}>MongoDB</span>
          </p>

          <div className={css.morebutton}>
            <Link href="/project">
              <button className={css.btnproject}>View Project</button>
            </Link>
            <Link
              href="https://github.com/Vonels"
              target="_blank"
              className={css.btngit}
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
