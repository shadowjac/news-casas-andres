import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const WithLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;
    return (
      <LoaderContainer>
        <Loader
          type="Puff"
          color="#aaaaff"
          height={300}
          width={300}
        />
      </LoaderContainer>
    );
  };
};

const LoaderContainer = styled.div`
  margin: 0 auto;
  padding-top: 50px;
`;
export default WithLoading;
