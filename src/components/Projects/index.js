import React from "react";

import { Wrapper, Link, Title, Points, Point } from "./styles";
import { UnderlinedLink } from "../../shared/styles/styled-components";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <Wrapper>
      {projects.map(project => (
        <div key={project.title}>
          <Link target="_blank" href={project.link}>
            <Title>{project.title}</Title>
          </Link>
          <Points>
            <Point>
              Type: {project.type}{" "}
              {project.type === "Open Source" ? null : `for ${project.client}`}
              <UnderlinedLink
                href={
                  project.github.githubHref === null
                    ? null
                    : project.github.githubHref
                }
              >
                {project.github.name === null
                  ? null
                  : ` | ${project.github.name}`}
              </UnderlinedLink>
            </Point>
            <Point>
              {project.description}{" "}
              {project.extra === null ? null : `${project.extra}`}
            </Point>
            <Point>{project.techStack}</Point>
          </Points>
        </div>
      ))}
    </Wrapper>
  );
};

export default Projects;
