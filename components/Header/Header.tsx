import Link from "next/link";
import css from "../Header/Header.module.css";

export default function Header() {
  return (
    <nav className={css.nav}>
      <h1 className={css.logo}>Portfolio</h1>

      <div className={css.navfull}>
        <h2 className={css.navelement}>Project</h2>
        <h2 className={css.navelement}>About</h2>
        <h2 className={css.navelement}>Contact</h2>
      </div>
    </nav>
  );
}
