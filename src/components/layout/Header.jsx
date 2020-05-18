import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { NewsRoutes } from "../../routing/NewsRoutes";

export const Header = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <ListContainer>
            {NewsRoutes.map((r) => (
              <ListItem>
                <Link to={r.path}>{r.text}</Link>
              </ListItem>
            ))}
          </ListContainer>
        </NavBar>
        <Switch>
          {NewsRoutes.map((r) => (
            <Route path={r.path} component={(props) => r.component(props)} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};

const NavBar = styled.nav`
  padding: 10px 70px;
  background-color: #aaaaff;
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
  }
`;
