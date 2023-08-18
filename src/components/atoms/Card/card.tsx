import React from 'react';
import styles from './card.module.css';

interface CardProps {
  imageSrc: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={name} className={styles.card_image} />
      <div className={styles.card_name}>{name}</div>
    </div>
  );
};

export default Card;
