import React from "react"
import CardTools from "./CardTools"
import { cardWork } from "../../Assets/database"
// import img from "../../Assets/img/2-website.jpg"

const CardWork = () => {
  return cardWork.map((item) => (
    <div key={item.id} className="works__card">
      <div className="works__image" style={item.image}></div>

      <div className="works__container">
        <div>
          <h3 className="works__title">{item.title}</h3>
          <p className="works__date">
            <i className="fas fa-calendar"></i> {item.date}
          </p>

          <p className="works__desc">{item.description}</p>
        </div>
        <div>
          <ul className="works__inner-items">
            <CardTools tools={item.tools} toolsId={item.id} />
          </ul>

          <div className="works__links">
            {item.demoBtn.visible ? (
              <a className="works__link" href={item.demoBtn.href}>
                <i className="fas fa-play"></i> Demo
              </a>
            ) : (
              <></>
            )}
            {item.srcCode.visible ? (
              <a className="works__link" href={item.srcCode.href}>
                <i className="fab fa-github"></i> Source Code
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  ))
}

export default CardWork
