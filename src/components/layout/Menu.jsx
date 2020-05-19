import React from 'react'
import styled from 'styled-components';
import { NewsRoutes } from '../../routing/NewsRoutes';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
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
    )
}
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