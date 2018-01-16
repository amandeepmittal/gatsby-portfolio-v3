import React from "react";
import { FaGithub } from "react-icons/lib/fa";

import {
  Wrapper,
  Link,
  Title,
  Points,
  Point,
  GithubUnderlinedLink
} from "../../shared/styles/styles-projects";
import { Section, SectionTitle } from "../../shared/styles/styled-components";

import { sideProjects } from "../../data/projects";

const SideProjects = () => {
  return (
    <Section>
      <SectionTitle>Side Projects</SectionTitle>
      <Wrapper>
        {sideProjects.map(project => (
          <div key={project.title}>
            <Link target="_blank" href={project.link}>
              <Title>{project.title}</Title>
            </Link>
            <Points>
              <Point>
                Type: {project.type}{" "}
                {project.type === "Open Source"
                  ? null
                  : `for ${project.client}`}{" "}
                <GithubUnderlinedLink
                  href={
                    project.github.githubHref === null
                      ? null
                      : project.github.githubHref
                  }
                  style={{ textDecoration: "none" }}
                >
                  {project.github.name === null ? null : (
                    <FaGithub style={{ fontSize: "30px" }} />
                  )}
                </GithubUnderlinedLink>
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
    </Section>
  );
};

export default SideProjects;
