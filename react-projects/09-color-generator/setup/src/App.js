import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <>
      {' '}
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? 'error' : ''}
            defa
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder='#f15025'
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
