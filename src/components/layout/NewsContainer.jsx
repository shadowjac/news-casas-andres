import React from "react";
import styled from "styled-components";

export const NewsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
