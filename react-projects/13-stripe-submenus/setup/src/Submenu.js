import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const [columns, setColumns] = useState('col-2');

  const content = useRef();

  const {
    isSubmenuOpen,
    page: { page, location, links },
  } = useGlobalContext();

  const { x, y } = location;

  useEffect(() => {
    console.log('page changed');

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [page]);

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      style={{ left: `${x}px`, top: `${y}px` }}
      ref={content}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
