import { Project } from "@/types/project";
import css from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className={css.card}>
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={220}
        className={css.image}
      />

      <h3>{project.title}</h3>

      <p>{project.desc}</p>

      <span>{project.tech}</span>

      <div className={css.buttons}>
        {project.demo && (
          <Link href={project.demo} target="_blank">
            <button className={css.demo}>Live Demo</button>
          </Link>
        )}

        {project.github && (
          <Link href={project.github} target="_blank">
            <button className={css.github}>GitHub</button>
          </Link>
        )}
      </div>
    </div>
  );
}
