import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';
import { getByLabelText } from '@testing-library/dom';

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <ul className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <li key={index}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
