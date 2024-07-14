import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country: "in",
    pageSize : 6,
    category :"general"

  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  handlePrevClick = async () => {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${
      this.props.apiKey
    }&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ page: this.state.page - 1, articles: parsedData.articles,loading : false });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ page: this.state.page + 1, articles: parsedData.articles,loading : false});
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ fontFamily: "Times New Roman" }}>
          Fast News - Top Headlines
        </h1>
        {this.state.loading?<Spinner/>:""}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title === null
                      ? ""
                      : element.title.length <= 40
                      ? element.title.slice(0, 40)
                      : element.title.slice(0, 40) + "..."
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  description={
                    element.description === null
                      ? ""
                      : element.description.length <= 88
                      ? element.description.slice(0, 88)
                      : element.description.slice(0, 88) + "..."
                  }
                  author={element.author}
                  publishedAt={new Date(element.publishedAt).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between container">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary my-2 "
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page ===
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary my-2 "
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
