import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className=" my-3">
        <div className="card" style={{ width: "18rem" }}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            className="card-img-top"
            src={
              !imageurl
                ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.co-7B09lFiv4I6GYr1MrhgHaHa%26pid%3DApi&f=1&ipt=1af3f1af50dddea24daa2de5d626c6d9c9fe33081a4d9fab3f07171336c7b8f7&ipo=images"
                : imageurl
            }
            style={{ objectFit: 'cover', height: '200px' }}
            alt="Nothing"
          />
          <div className="card-body bg-dark "
          style={{color: "white"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              class="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
