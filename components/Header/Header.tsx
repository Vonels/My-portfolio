"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaHeadphones, FaTelegram, FaPhone } from "react-icons/fa";
import css from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.dom}>
        {/* LOGO */}
        <Link href="/" className={css.logo}>
          PORTFOLIO
        </Link>

        {/* NAV MENU */}
        <div className={`${css.navfull} ${menuOpen ? css.navOpen : ""}`}>
          <Link
            href="/project"
            className={css.link}
            onClick={() => setMenuOpen(false)}
          >
            Project
          </Link>

          <Link
            href="/about"
            className={css.link}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <span
            className={css.link}
            onClick={() => {
              setContactOpen(true);
              setMenuOpen(false);
            }}
          >
            Contact
          </span>
        </div>

        {/* CONTACT MENU (НОВОЕ) */}
        <div
          className={`${css.contactMenu} ${contactOpen ? css.contactOpen : ""}`}
        >
          <Link
            href="tel:+380950135917"
            className={css.link}
            onClick={() => setContactOpen(false)}
          ></Link>

          <Link
            href="https://t.me/Vladka_56"
            target="_blank"
            className={css.link}
            onClick={() => setContactOpen(false)}
          ></Link>
        </div>

        {/* RIGHT SIDE */}
        <div className={css.right}>
          <a
            href="https://github.com/Vonels"
            target="_blank"
            className={css.icon}
          >
            <FaGithub />
          </a>

          {/* НАУШНИКИ */}
          <button
            className={css.icon}
            onClick={() => {
              setContactOpen(!contactOpen);
              setMenuOpen(false); // закрываем бургер
            }}
          >
            <FaHeadphones />
          </button>

          {/* BURGER */}
          <button
            className={css.burger}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setContactOpen(false); // закрываем контакты
            }}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
