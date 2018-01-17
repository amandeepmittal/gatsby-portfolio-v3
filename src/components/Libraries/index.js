import React from "react";
import { FaGithub } from "react-icons/lib/fa";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import {
  Points,
  Point,
  GithubUnderlinedLink
} from "../../shared/styles/styles-projects";

import { libraries } from "../../data/libraries";

const Libraries = () => {
  return (
    <Section>
      <SectionTitle>Libraries / Packages I have Written</SectionTitle>
      <UnorderedList>
        {libraries.map(library => (
          <ListItem key={library.link}>
            <Points>
              <Point>
                <UnderlinedLink target="_blank" href={library.link}>
                  {library.title}
                </UnderlinedLink>{" "}
                {library.description} Using {library.techStack}.{" "}
                <GithubUnderlinedLink href={library.githubhref} target="_blank">
                  <FaGithub style={{ fontSize: "30px" }} />
                </GithubUnderlinedLink>{" "}
              </Point>
            </Points>
          </ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
};

export default Libraries;
