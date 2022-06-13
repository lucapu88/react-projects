import React from 'react';
import { FaBars } from 'react-icons/fa';
import { links, SocialBar } from './links';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const { openModal } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <p>
            Nav
            <button onClick={openModal}> Apri Modale</button>
          </p>
        </div>
        <button className="btn nav-toggler">
          <FaBars onClick={openSidebar}></FaBars>
        </button>
      </header>
      <div className="links-container">
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} alt={link.text}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social-links">
        <SocialBar></SocialBar>
      </div>
    </nav>
  );
};

export default Navbar;
