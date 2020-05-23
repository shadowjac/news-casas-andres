import React from "react";
import styled from "styled-components";
import { NewsRoutes } from "../../routing/NewsRoutes";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <NavBar>
      <MainNavButton id="mainNavButton" />
      <BurgerContainer htmlFor="mainNavButton" onclick>
        <IconBurger />
        <IconBurger />
        <IconBurger />
      </BurgerContainer>
      <ListContainer>
        {NewsRoutes.map((r) =>
          r.visible ? (
            <ListItem key={r.text}>
              <Link to={r.path}>{r.text}</Link>
            </ListItem>
          ) : (
            <></>
          )
        )}
      </ListContainer>
    </NavBar>
  );
};
const NavBar = styled.nav`
  position: relative;
  padding: 10px 20px;
`;

const ListContainer = styled.ul`
  display: none;
  width: 100%;
  list-style: none;
  margin: 0px;
  padding: 0px;
  @media (min-width: 769px) {
    /* older flexbox */
    display: -ms-flexbox;
    flex-direction: -ms-row;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    box-orient: horizontal;
    /* newer flexbox */
    display: flex;
    flex-direction: row;
  }
`;

const ListItem = styled.li`
  a {
    display: block;
    padding: 1em;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    color: #aaaaff;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    transition: color 0.1s, background-color 0.1s;
  }
  a {
    position: relative;
    display: block;
    padding: 16px 0;
    margin: 0 12px;
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 900;
    text-transform: uppercase;
    transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
    color: #000;
  }
  a::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #aaaaff;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }
  a:active::before {
    background-color: #aaaaff;
  }
  a:hover::before,
  a:focus::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
  @media (min-width: 769px) {
    position: relative;
    text-align: center;
    /* older flexbox */
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    flex: 1;
    &:hover > ul {
      display: block !important;
    }
  }
`;

const MainNavButton = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: -9999px;
  left: -9999px;
  &:checked ~ ul,
  &:checked ~ ul li {
    display: block !important;
    @media (min-width: 769px) {
      /* older flexbox */
      display: -webkit-box;
      display: -moz-box;
      display: box;
      -webkit-box-orient: horizontal;
      -moz-box-orient: horizontal;
      box-orient: horizontal;
      /* newer flexbox */
      display: flex;
      flex-direction: row;
    }
  }
`;
const BurgerContainer = styled.label`
  position: relative;
  display: block;
  min-height: 2em;
  padding: 0.45em;
  font-size: 1.1em;
  margin: 0;
  cursor: pointer;
  line-height: 2em;
  :after {
    position: absolute;
    right: 1em;
    top: 0.2em;
    font-size: 1.8em;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
const IconBurger = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;
