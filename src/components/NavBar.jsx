/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

/*
 * ========================================================
 * ========================================================
 *
 *                 Component for Nav Bar
 *
 * ========================================================
 * ========================================================
 */

export default function NavBar() {
  const [newSearch, setNewSearch] = useState(true);
  const [fav, setFav] = useState(false);
  const [pastEats, setPastEats] = useState(false);
  const [pastSearch, setPastSearch] = useState(false);
  const newSearchChange = () => {
    if (newSearch === false) {
      setNewSearch(true);
      setFav(false);
      setPastEats(false);
      setPastSearch(false);
    } else {
      setNewSearch(false);
      setFav(false);
      setPastEats(false);
      setPastSearch(false);
    }
  };
  const favChange = () => {
    if (fav === false) {
      setFav(true);
      setNewSearch(false);
      setPastEats(false);
      setPastSearch(false);
    } else {
      setFav(false);
      setNewSearch(false);
      setPastEats(false);
      setPastSearch(false);
    }
  };
  const pastEatChange = () => {
    if (pastEats === false) {
      setPastEats(true);
      setNewSearch(false);
      setFav(false);
      setPastSearch(false);
    } else {
      setPastEats(false);
      setNewSearch(false);
      setFav(false);
      setPastSearch(false);
    }
  };
  const pastSearchChange = () => {
    if (pastSearch === false) {
      setPastSearch(true);
      setNewSearch(false);
      setFav(false);
      setPastEats(false);
    } else {
      setPastSearch(false);
      setNewSearch(false);
      setFav(false);
      setPastEats(false);
    }
  };

  return (
    <div>
      <header>
        <a href="#" className="logo">
          <i className="fas fa-utensils" />
          {' '}
          <span className="nav-title"> OM-NOM-NISCIENT </span>
        </a>
        <nav className="navbar">
          <Link to="/">
            {newSearch ? <span className="navbar-new-search nav-bar-background" onClick={newSearchChange}> New Search</span> : <span className="navbar-new-search" onClick={newSearchChange}> New Search</span>}
          </Link>
          <Link to="/fav">{fav ? <span className="navbar-fav nav-bar-background" onClick={favChange}> Favourites</span> : <span className="navbar-fav" onClick={favChange}> Favourites</span>}</Link>
          <Link to="/eats">{ pastEats ? <span className="navbar-past-eats nav-bar-background" onClick={pastEatChange}> Past Eats</span> : <span className="navbar-past-eats" onClick={pastEatChange}> Past Eats</span>}</Link>
          <Link to="/searches">{pastSearch ? <span className="navbar-past-searches nav-bar-background" onClick={pastSearchChange}> Past Searches</span> : <span className="navbar-past-searches" onClick={pastSearchChange}> Past Searches</span>}</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
