import React from "react";
import Link from "gatsby-link";

import {
  Sides,
  LeftSide,
  RightSideHome
} from "../shared/styles/styled-components";

import Info from "../components/Info";
import Who from "../components/Who";
import What from "../components/What";
import DevStack from "../components/DevStack";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import SideProjects from "../components/SideProjects";
import Blogs from "../components/Blogs";
import OpenSourceCommits from "../components/OpenSourceCommits";
import Libraries from "../components/Libraries";
import Interesting from "../components/Interesting";

const IndexPage = () => (
  <div>
    <Sides>
      <LeftSide>
        <Info />
      </LeftSide>
      <RightSideHome>
        <Who />
        <What />
        <DevStack />
        <Technologies />
        <Projects />
        <OpenSourceCommits />
        <SideProjects />
        <Blogs />
        <Libraries />
        <Interesting />
      </RightSideHome>
    </Sides>
  </div>
);

export default IndexPage;
