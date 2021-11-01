import React from "react"
import { Link } from "react-router-dom"
import { pathLinks } from "../state/stateApp"

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__inner">
        {pathLinks.map((link) => (
          <li className="nav__item" key={link.id}>
            <Link to={link.path} className={link.class}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
