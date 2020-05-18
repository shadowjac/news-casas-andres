import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { NewsRoutes } from "../../routing/NewsRoutes";
import { Header } from "./Header";

export const Menu = () => {
  return (
    <>
      <BrowserRouter>
        <Route component={Header} />
        <NavBar>
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
        <Switch>
          {NewsRoutes.map((r) => (
            <Route
              path={r.path}
              component={(props) => r.component(props)}
              key={r.text}
            />
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
