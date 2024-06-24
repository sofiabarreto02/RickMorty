import React from 'react';
import './Card.css';

export const Card = ({ imgCharacter, nameCharacter, genderCharacter }) => {
  return (
    <div className='card'>
      <img alt={nameCharacter} src={imgCharacter} />
      <h1>Name:{nameCharacter}</h1>
      <p>Gender:{genderCharacter}</p>
    </div>
  );
};
