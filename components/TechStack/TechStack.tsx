import css from "./TechStack.module.css";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

export default function TechStack() {
  const stack = [
    { name: "Next.js", icon: <SiNextdotjs />, class: "next" },
    { name: "React", icon: <SiReact />, class: "react" },
    { name: "TypeScript", icon: <SiTypescript />, class: "ts" },
    { name: "Node.js", icon: <SiNodedotjs />, class: "node" },
    { name: "MongoDB", icon: <SiMongodb />, class: "mongo" },
    { name: "Tailwind", icon: <SiTailwindcss />, class: "tailwind" },
    { name: "Git", icon: <SiGit />, class: "git" },
  ];

  return (
    <section className={css.tech}>
      <div className={css.techcontainer}>
        <h3 className={css.title}>Tech Stack</h3>

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
      </div>
    </section>
  );
}
