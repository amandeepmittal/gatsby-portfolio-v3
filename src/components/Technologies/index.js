import React from "react";

import {
  Section,
  SectionTitle,
  ListItem,
  UnorderedList
} from "../../shared/styles/styled-components";

import { technologies } from "../../data/technologies";

const Technologies = () => {
  return (
    <Section id="technologies">
      <SectionTitle>Technogolies / Tools I've used</SectionTitle>
      <UnorderedList>
        <ListItem>
          <p>{technologies.join(", ")}.</p>
        </ListItem>
      </UnorderedList>
    </Section>
  );
};

export default Technologies;
