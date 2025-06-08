import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const bcg = rgb.join(',');

  const hex = rgbToHex(...rgb);

  function alertHandler(e) {
    e.preventDefault();
    setAlert(true);
  }

  return (
    <article
      onClick={alertHandler}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `rgba(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
