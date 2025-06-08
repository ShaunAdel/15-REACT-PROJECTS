import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>payments infrustructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur quia veritatis tempore aut aliquid, alias id nam, quam
            modi expedita fugit impedit labore illo molestiae dolorem numquam
            hic reprehenderit! Voluptatibus.
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
