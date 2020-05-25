import React from "react";
import styled from "styled-components";
import searchButton from "./../../static/search-icon.svg";
import newsIcon from "./../../static/news-icon.png";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    const { query } = this.state;
    history.push(`/search/${query}`);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <HeaderContainer>
        <Title>
          <Link to="/">
            <img src={newsIcon} alt="news-ac" width="100px" height="60px" />
          </Link>
        </Title>
        <SearchContainer>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="query"
                onChange={this.handleChange}
                placeholder="Search"
              />
            </form>
            <ButtonStyled>
              <img src={searchButton} alt="" />
            </ButtonStyled>
          </div>
        </SearchContainer>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 0 10px;
  align-items: center;
  background-color: yellowgreen;
  justify-content: space-between;
  height: 60px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const SearchContainer = styled.div`
  border: 0;
  input {
    height: 30px;
    border-radius: 20px;
    padding-left: 10px;
    border: 0px;
    color: #222222;
  }
`;

const ButtonStyled = styled.a`
  position: absolute;
  margin-top: -27px;
  margin-right: 10px;
  right: 0;
  padding: 0 10px;
  border: 0;
`;
