import PropTypes from "prop-types";
import React from 'react';


const BlogItem = ({ data }) => {
    return (
      <div className="blog">
        <div className="thumbnail">
          <a href={data.link} className="image" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt="Blog Image" width="300" height="300" />
          </a>
        </div>
        <div className="info">
          <ul className="meta">
            <li><i className="far fa-calendar"></i>{data.date}</li>
            <li><i className="far fa-eye"></i>{data.view}</li>
          </ul>
          <h3 className="title"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
          <a href={data.link} className="link" target="_blank" rel="noopener noreferrer"> <mark>Read More</mark> </a>
        </div>
      </div>
    );
  }
  

BlogItem.propTypes = {
    data: PropTypes.object
};

export default BlogItem
