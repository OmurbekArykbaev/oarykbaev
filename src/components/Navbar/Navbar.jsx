import React from "react"
import { Link } from "react-router-dom"
import { pathLinks } from "../state/stateApp"
import { useHistory } from "react-router"

const Navbar = () => {
  const histoty = useHistory()
  const handleHistory = () => {
    histoty.push("/works1")
  }
  return (
    <nav className="nav">
      <ul className="nav__inner">
        {pathLinks.map((link) =>
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
              <Link
                onClick={handleHistory}
                to={link.path}
                className={link.class}
              >
                {link.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Navbar
