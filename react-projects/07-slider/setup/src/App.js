import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const maxIndex = people.length - 1;
    if (index < 0) {
      setIndex(maxIndex);
    }
    if (index > maxIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let value = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(value);
  }, [index]);

  setTimeout(() => {
    console.log('Timeout');
  }, 3000);

  setInterval(() => {
    console.log('Interval');
  }, 3000);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          //more stuff coming up

          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button
          className='next'
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
        <button
          className='prev'
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
      </div>
    </section>
  );
}

export default App;
