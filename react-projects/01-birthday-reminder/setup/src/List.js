import React from 'react';

const List = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        const { id, image, age, name } = person;
        return (
          <li key={id} className='person'>
            <img src={image} alt='' />
            <h3>{name}</h3>
            <p>{age}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
