import React, { Component } from "react";
import { FaGithub } from "react-icons/lib/fa";
import ToggleDisplay from "react-toggle-display";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem,
  ShowMoreButton
} from "../../shared/styles/styled-components";
import {
  Points,
  Point,
  GithubUnderlinedLink
} from "../../shared/styles/styles-projects";

import { libraries } from "../../data/libraries";

class Libraries extends Component {
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
        <SectionTitle>Libraries / Packages I have Written</SectionTitle>
        <ShowMoreButton onClick={() => this.handleClick()}>
          {this.state.text}
        </ShowMoreButton>
        <ToggleDisplay show={this.state.show}>
          <UnorderedList>
            {libraries.map(library => (
              <ListItem key={library.link}>
                <Points>
                  <Point>
                    <UnderlinedLink
                      target="_blank"
                      href={library.link}
                      rel="noopener"
                    >
                      {library.title}
                    </UnderlinedLink>{" "}
                    {library.description} Using {library.techStack}.{" "}
                    <GithubUnderlinedLink
                      href={library.githubhref}
                      target="_blank"
                      rel="noopener"
                    >
                      <FaGithub style={{ fontSize: "30px" }} />
                    </GithubUnderlinedLink>{" "}
                  </Point>
                </Points>
              </ListItem>
            ))}
          </UnorderedList>
        </ToggleDisplay>
      </Section>
    );
  }
}

export default Libraries;
