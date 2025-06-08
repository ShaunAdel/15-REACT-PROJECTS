import React from 'react';
import { FaLifeRing } from 'react-icons/fa';

export default function Job({ id, order, title, dates, duties, company }) {
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty, index) => (
        <div key={index} className='job-desc'>
          <FaLifeRing className='job-icon' />
          <p>{duty}</p>
        </div>
      ))}
    </article>
  );
}
