import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home-link"> MovieTracker </Link>
      <NavLink to="/favorites"
               className="fave-nav-link"
               activeClassName="clicked-fave-link">
               My Favorites
      </NavLink>
    </header>

  );
};

export default Header;
