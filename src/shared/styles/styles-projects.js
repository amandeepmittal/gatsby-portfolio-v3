import styled from "styled-components";
import { media } from "../../utils/responsive-utils";
import { ListItem, UnderlinedLink } from "./styled-components";

export const Wrapper = styled(ListItem)`
  margin: 35px 0;
`;

export const Link = styled(UnderlinedLink)`
  margin-bottom: 10px;
  padding-bottom: 5px;
  display: inline-block;
`;

export const Points = styled.div`
  margin-bottom: 40px;
  line-height: 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  position: relative;

  &:before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 100%;
    color: white;
    background-color: #66dbff;
    position: absolute;
    left: -90px;
    top: 0px;
    border: 5px solid #69359c;

    ${media.phoneM`
        left: -45px;
      `};
  }

  ${media.phoneM`
       font-size: 22px;
    `};
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: 15px 0;
  line-height: 25px;
  margin-bottom: 15px;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -85px;
    top: 4px;
    border: 4px solid #69359c;
    ${media.phoneM`
        left: -40px;
    `};
  }
`;

export const GithubUnderlinedLink = styled.a`
  color: white;
  text-decoration: none;
  ${props =>
    props.href &&
    `
      border-bottom: 0px rgba(255, 255, 255, 0.7);
    `} padding-bottom: 1px;
  &:hover {
    color: #bd93d8;
  }
`;
