import React from 'react';
import '../componentsCss/header.css';

function Header(props) {
  return (
    <div class="part1">
        <h1>{props.title}</h1>
        <p>{props.parrafo}</p>
    </div>
  );
}

export default Header;
