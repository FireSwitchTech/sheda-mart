import React from 'react';
import "./navbar.css"
import {Link}  from "react-router-dom"


const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">SHEDA MART</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Account <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Log In</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Cart</a>
            </li>

            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/categories/photography">Photograghy</Link>
          <div class="dropdown-divider"></div>
          <Link to="/categories/graphic design">Graphic Design</Link>
          <div class="dropdown-divider"></div>
          <Link to="/categories/technology">Technology</Link>
          <div class="dropdown-divider"></div>
          <Link to="/catgories/music">Music</Link>
          <div class="dropdown-divider"></div>
          <Link to="/categories/publishing">Publishing</Link>
          <div class="dropdown-divider"></div>
          <Link to="/categories/writing">Writing</Link>
          <div class="dropdown-divider"></div>
          <Link to="/categories/games">Games</Link>
          <div class="dropdown-divider"></div>
          <Link to="/categories/arts and crafts">Arts and Crafts</Link>
        </div>
      </li>
            
              </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>   
     );
}
 
export default Navbar;