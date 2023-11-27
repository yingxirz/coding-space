import React from 'react';

import Card from './card';
import './cardList.css';

interface ListItem {
  content: string;
  imageURL?: string;
  title: string;
}

let list: ListItem[] = [
  {
    content: 'This is the content of Card 1.',
    title: 'Apple',
  },
  {
    content: 'This is the content of Card 2.',
    title: 'Pear',
  },
  {
    content: 'This is the content of Card 3.',
    title: 'Painapple',
  },
];

const CardList = () => {
  return (
    <div className="container">
      {list.map((item, index) => (
        <Card content={item.content} key={index} title={item.title} />
      ))}
    </div>
  );
};

export default CardList;
