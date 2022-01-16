import React from "react"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__inner">
        <li className="nav__item">Arykbaev</li>
        <li className="nav__item">Главное</li>
        {/* {pathLinks.map((link) =>
          link.title === "ARYKBAEV" ? (
            <div key={link.id}>
              <li className="nav__item">
                <Link to={link.path} className={link.class}>
                  {link.title}
                </Link>
              </li>
            </div>
          ) : (
            <li className="nav__item" key={link.id}>
              <Link to={link.path} className={link.class}>
                {link.title}
              </Link>
            </li>
          )
        )} */}
      </ul>
    </nav>
  )
}

export default Navbar
