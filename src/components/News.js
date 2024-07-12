import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=2050bf7ab6ce4e05bc3af4823f553349&pageSize=9&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();


    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2050bf7ab6ce4e05bc3af4823f553349&pageSize=9&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  handleNextClick = async () => {

    if(this.state.page===Math.ceil(this.state.totalResults/9)){}
    
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2050bf7ab6ce4e05bc3af4823f553349&pageSize=9&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ page: this.state.page + 1, articles: parsedData.articles });
  }
  };
  render() {
    return (
      <div className="container my-3">
        <h2>Fast News - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
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
