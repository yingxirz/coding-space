import React from 'react';

import './Card.css';

interface CardProps {
  content: string;
  title: string;
}

// const App = () => {
//   const [isHovered, setIsHovered] = useState(false);

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
