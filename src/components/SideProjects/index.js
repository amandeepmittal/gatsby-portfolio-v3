import React, { Component } from "react";
import { FaGithub } from "react-icons/lib/fa";
import ToggleDisplay from "react-toggle-display";

import {
  Wrapper,
  Link,
  Title,
  Points,
  Point,
  GithubUnderlinedLink
} from "../../shared/styles/styles-projects";
import {
  Section,
  SectionTitle,
  ShowMoreButton
} from "../../shared/styles/styled-components";

import { sideProjects } from "../../data/projects";

class SideProjects extends Component {
  state = {
    show: false,
    text: "Show me more"
  };

  handleClick() {
    this.setState({
      show: !this.state.show,
      text: "That's Enough!"
    });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Side Projects</SectionTitle>
        <ShowMoreButton onClick={() => this.handleClick()}>
          {this.state.text}
        </ShowMoreButton>
        <ToggleDisplay show={this.state.show}>
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
                      target="_blank"
                      rel="noopener"
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
        </ToggleDisplay>
      </Section>
    );
  }
}

export default SideProjects;
