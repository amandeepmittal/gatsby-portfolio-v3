import React from "react";
import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { textLinks } from "../../data/socialLinks";

const WhoAmI = () => {
  return (
    <Section id="who">
      <SectionTitle>Who?</SectionTitle>
      <UnorderedList>
        {textLinks.map(link => (
          <ListItem key={link.href}>
            <UnderlinedLink target="_blank" href={link.href}>
              {link.title}
            </UnderlinedLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
};

export default WhoAmI;
