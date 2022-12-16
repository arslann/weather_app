import React from 'react';
import './card.css';

function Card({ children, className }) {
  return (
    <div className={`wa__card ${className ? className : ''}`}>{children}</div>
  );
}

export default Card;
