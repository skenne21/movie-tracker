import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home_link"> MovieTracker</Link>
      <NavLink to="/favorites">Favorites</NavLink>
    </header>

  )
}

export default Header;