import React from "react";
import { newsService } from "../../services/newsService";
import { Card } from "../layout/Card";
import { NewsContainer } from "../layout/NewsContainer";

export class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], isLoading: true };
  }

  async componentDidMount() {
    const news = await newsService.searchByCategory(this.props.category);
    this.setState({ news, isLoading: false });
  }

  render() {
    const news = this.state.news;
    return (
      <>
        {this.state.isLoading && <div>Loading...</div>}
        <NewsContainer>
          {news &&
            !this.state.isLoading &&
            news.map((n) => <Card {...n} key={n.news_id} />)}
        </NewsContainer>
      </>
    );
  }
}
