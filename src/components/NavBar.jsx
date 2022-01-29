/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import React from "react";
import { Outlet, Link } from "react-router-dom";

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
  return (
    <div>
      <header>
        <a href="#" class="logo">
          <i class="fas fa-utensils"></i>TBD
        </a>
        <nav className="navbar">
          <Link to="/">New Search</Link>
          <Link to="/fav">Favourites</Link>
          <Link to="/eats">Past Eats</Link>
          <Link to="/searches">Past Searches</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
