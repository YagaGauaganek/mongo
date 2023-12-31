import React from 'react';
import "./Header.css";

import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <h2>Mongo</h2>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}
