import React from 'react';
import '../componentsCss/article.css';

function Article(props) {
  return (
        <div className="article">
            <h2>{props.title}</h2>
            <p>{props.parrafo}</p>
        </div>
  );
}

export default Article;