import css from "../Hero/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={css.hero}>
      <video
        className={css.videoBg}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="/didu.mp4" type="video/mp4" />
      </video>

      <div className={css.dom}>
        <div className={css.blockleft}>
          <h1 className={css.title}>
            Hi, I’m <br />
            <span className={css.name}>Vlad Nesterenko</span>
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
