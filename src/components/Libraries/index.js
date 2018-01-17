import React from "react";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { Points, Point } from "../../shared/styles/styles-projects";

import { OSS } from "../../data/projects";

const Libraries = () => {
  return (
    <Section>
      <SectionTitle>Libraries / Packages I have Written</SectionTitle>
      <UnorderedList>
        {OSS.map(contribution => (
          <ListItem key={contribution.link}>
            <Points>
              <Point>
                <UnderlinedLink target="_blank" href={contribution.link}>
                  {contribution.description}
                </UnderlinedLink>
              </Point>
            </Points>
          </ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
};

export default Libraries;
