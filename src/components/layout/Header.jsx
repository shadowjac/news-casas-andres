import React from "react";
import styled from "styled-components";

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
        <Title>News Feed</Title>
        <SearchContainer>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="query"
              onChange={this.handleChange}
              placeholder="Search"
            />
          </form>
        </SearchContainer>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  padding-left: 10px;
  align-items: center;
  background-color: yellowgreen;
`;

const Title = styled.div`
  font-size: 20px;
`;

const SearchContainer = styled.div`
  border: 0;
`;
