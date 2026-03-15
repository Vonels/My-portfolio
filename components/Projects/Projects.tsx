"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";
import css from "./Projects.module.css";

export default function Projects() {
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section className={css.projects}>
      <div className={css.container}>
        <Sidebar active={category} setActive={setCategory} />

        <div className={css.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
