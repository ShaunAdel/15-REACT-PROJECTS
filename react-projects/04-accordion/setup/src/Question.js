import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  const { id, title, info } = question;

  const [showInfo, setShowInfo] = useState(true);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)} className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {showInfo ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
