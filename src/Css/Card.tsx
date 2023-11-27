import React, { useState } from 'react';

import './Card.css';

interface CardProps {
  content: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
