"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaHeadphones, FaTelegram, FaPhone } from "react-icons/fa";
import css from "../Header/Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={css.nav}>
      <Link href="/" className={css.logo}>
        Portfolio
      </Link>

      <div className={css.navfull}>
        <Link href="/project" className={css.navelement}>
          Project
        </Link>

        <Link href="/about" className={css.navelement}>
          About
        </Link>

        <h2 className={css.navelement}>Contact</h2>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className={css.righticons}>
        {/* GitHub */}
        <a
          href="https://github.com/Vonels"
          target="_blank"
          className={css.icon}
        >
          <FaGithub />
        </a>

        {/* Headphones */}
        <button className={css.icon} onClick={() => setOpen(!open)}>
          <FaHeadphones />
        </button>

        {/* Popup */}
        {open && (
          <div className={css.popup}>
            <a href="tel:+380950135917">
              <FaPhone /> +380950135917
            </a>

            <a href="https://t.me/Vladka_56" target="_blank">
              <FaTelegram /> Vladka_56
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
