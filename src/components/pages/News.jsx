import React from "react";
import { Card } from "../layout";
import WithLoading from "../layout/hoc/WithLoading";
import { categories } from "../../constants/categories";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  searchByCategoryAction,
  searchByQueryAction,
  getTodayNewsAction,
} from "./../../redux/actions";

const NewsList = ({ news }) =>
  news ? news.map((n) => <Card {...n} key={n.news_id} />) : <></>;
const ListWithLoading = WithLoading(NewsList);

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    const {
      searchByCategoryAction,
      searchByQueryAction,
      getTodayNewsAction,
    } = props;
    this.searchByCategory = searchByCategoryAction;
    this.searchByQuery = searchByQueryAction;
    this.getTodayNews = getTodayNewsAction;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.category === categories.search &&
      prevProps.match.params.query !== this.props.match.params.query
    ) {
      this.searchByQuery(this.props.match.params.query);
    }
  }

  async getNews() {
    const {
      category,
      match: { params },
    } = this.props;
    switch (category) {
      case categories.search:
        await this.searchByQuery(params.query);
        break;
      case categories.home:
        await this.getTodayNews();
        break;
      default:
        await this.searchByCategory(category);
        break;
    }
  }

  async componentDidMount() {
    this.getNews();
  }

  render() {
    const news = this.props.news;
    return (
      <NewsContainer isLoading={this.props.isLoading}>
        <ListWithLoading isLoading={this.props.isLoading} news={news} />
      </NewsContainer>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    news: state.news,
    category: ownProps.category,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  searchByCategoryAction,
  searchByQueryAction,
  getTodayNewsAction,
};
export const News = connect(mapStateToProps, mapDispatchToProps)(NewsComponent);

const NewsContainer = styled.div`
  display: ${(props) => (props.isLoading ? "flex" : "grid")};
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1108px;
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
