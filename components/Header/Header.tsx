import Link from "next/link";
import css from "../Header/Header.module.css";

export default function Header() {
  return (
    <nav className={css.nav}>
      <Link href="/" className={css.logo}>
        Portfolio
      </Link>

      <div className={css.navfull}>
        <h2 className={css.navelement}>Project</h2>
        <Link href="/about" className={css.navelement}>
          About
        </Link>
        <h2 className={css.navelement}>Contact</h2>
      </div>
    </nav>
  );
}
