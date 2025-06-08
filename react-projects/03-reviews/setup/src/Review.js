import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  function decreaseIndex() {
    if (index !== 0) {
      setIndex(index - 1);
    } else setIndex(0);
  }

  function increaseIndex() {
    if (index !== people.length - 1) {
      setIndex(index + 1);
    } else setIndex(people.length - 1);
  }

  function randomIndex() {
    const a = Math.random() * people.length;

    setIndex(Math.floor(a));
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          onClick={decreaseIndex}
          disabled={index === 0}
          className='prev-btn'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={increaseIndex}
          className='next-btn'
          disabled={index === people.length - 1}
        >
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomIndex} className='random-btn'>
        surprise me
      </button>
    </article>
  );
};

export default Review;
