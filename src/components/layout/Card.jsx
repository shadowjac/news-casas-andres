import React from "react";
import styled from "styled-components";
import moment from "moment";

export const Card = ({ img_url, title, date, url, source_name }) => {
  return (
    <CardContainer>
      <Img src={img_url} alt={title || "Noticia"} />
      <Title>{title}</Title>
      <FooterContainer>
        <div>
          {source_name} - {moment.unix(date).format("DD/MM/YYYY") || ""}
        </div>
        {url && (
          <button onClick={() => window.open(url, "_blank")}>Ver mas</button>
        )}
      </FooterContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 94%;
  margin: 10px 0 10px 0;
  padding: 10px;
  justify-content: space-between;
  background-color: #ffffff;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
`;
const Title = styled.div`
  height: 65px;
  padding-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 65px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: default;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-top: 25px;
  div {
    color: #a9a9a9;
    font-size: 14px;
  }

  button {
    height: 30px;
    width: 90px;
    background-color: #aaaaff;
    color: #ffffff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;
