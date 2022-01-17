import React from "react"
import { Link } from "react-router-dom"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__inner">
        <li className="nav__item">
          <Link to="/">Главное</Link>
        </li>
        <span className="nav__bar">
          <button>
            <i className="fas fa-bars"></i>
          </button>

          <Link to="/">
            <i className="fas fa-bars"></i>
          </Link>
        </span>
      </ul>
    </nav>
  )
}

export default Navbar
