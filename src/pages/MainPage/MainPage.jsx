import React from "react"
import { Link } from "react-router-dom"
import "./MainPage.scss"

const MainPage = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__title-links">
          <img
            alt="Avatar"
            className="header__image"
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />

          <div className="header__personal-data">
            <h2>Omurbek Arykbaev</h2>
            <h5>
              <i className="fas fa-briefcase"></i> Front-End Developer
            </h5>
            <h5>
              <i className="fas fa-map-marker-alt"></i> Bishkek, Kyrgyzstan
            </h5>
          </div>

          <ul className="header__skills">
            <li className="skill_item">JavaScript</li>
            <li className="skill_item">React</li>
            <li className="skill_item">Redux</li>
            <li className="skill_item">Sass|Scss</li>
            <li className="skill_item">Git</li>
          </ul>
          <ul className="header__links">
            <li>
              <a href="https://github.com/OmurbekArykbaev">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/twonpix">
                <i className="fab fa-telegram"></i>
              </a>
            </li>
            <li>
              <a href="mailto:firefoxer00@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/oarykbaev/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <article className="header__aboutme">
          <p>
            Hello there! I'm Front-End Developer, i take really enjoy to type
            code and create web application. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi mollitia facilis, accusantium, at
            debitis illum laborum eveniet sed voluptate fuga enim tempora quos
            esse magnam. Fuga quibusdam animi amet quia quam aut culpa commodi
            ratione maxime tenetur unde odio nulla dolores itaque quos optio
            doloribus facere quo, eius vel delectus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem incidunt perspiciatis,
            dolorem ex voluptas velit laboriosam commodi necessitatibus
            voluptatum repellat.
          </p>

          <ul className="links">
            <li className="links__item">
              <Link to="/projects">
                <i className="far fa-gem"></i> Проекты
              </Link>
            </li>
            <li className="links__item">
              <Link to="/cv">
                <i className="far fa-file"></i> Резюме
              </Link>
            </li>
            <li className="links__item">
              <a href="https://github.com/OmurbekArykbaev">
                <i className="fab fa-github-alt"></i> GitHub
              </a>
            </li>
          </ul>
        </article>
      </div>
    </header>
  )
}

export default MainPage
