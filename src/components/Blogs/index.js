import React from "react";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";

import { blogposts } from "../../data/blog";

const Blogs = () => {
  return (
    <Section id="blogs">
      <SectionTitle>Latest Blog Posts</SectionTitle>
      <UnorderedList>
        {blogposts.map(post => (
          <ListItem key={post.link}>
            <UnderlinedLink target="_blank" href={post.link}>
              {post.title}
            </UnderlinedLink>{" "}
            published by {post.publication}
          </ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
};

export default Blogs;
