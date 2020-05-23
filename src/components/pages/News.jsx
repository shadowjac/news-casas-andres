import React from "react";
import newsService from "../../services";
import { Card } from "../layout";
import WithLoading from "../layout/hoc/WithLoading";
import { categories } from "../../constants/categories";
import styled from "styled-components";
import moment from "moment";

const NewsList = ({ news }) => news.map((n) => <Card {...n} key={n.news_id} />);
const ListWithLoading = WithLoading(NewsList);
export class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], isLoading: true };
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.category === categories.search &&
      prevProps.match.params.query !== this.props.match.params.query
    ) {
      this.setState({ news: [], isLoading: true });
      const news = await newsService.searchBy(this.props.match.params.query);
      this.setState({ news, isLoading: false });
    }
  }

  async getNews() {
    const {
      category,
      match: { params },
    } = this.props;

    switch (category) {
      case categories.search:
        return await newsService.searchBy(params.query);
      case categories.home:
        return await newsService.searchByDate(moment().format("YYYY-MM-DD"));
      default:
        return await newsService.searchByCategory(category);
    }
  }

  async componentDidMount() {
    const news = await this.getNews();
    this.setState({ news, isLoading: false });
  }

  render() {
    const news = this.state.news;
    return (
      <NewsContainer isLoading={this.state.isLoading}>
        <ListWithLoading isLoading={this.state.isLoading} news={news} />
      </NewsContainer>
    );
  }
}

const NewsContainer = styled.div`
  display: ${props => props.isLoading ? 'flex' : 'grid'};
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
