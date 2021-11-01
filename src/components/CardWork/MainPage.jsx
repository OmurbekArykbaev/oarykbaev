import React from "react"
import CardWork from "./CardWork"
import { cardWork } from "../state/stateApp"

const MainPage = () => {
  return (
    <article className="works">
      <div className="project">
        <h1 className="project__title">Мои работы</h1>{" "}
        <span className="project__count">{cardWork.length}</span>
      </div>
      <div className="works__inner">
        <CardWork /> {/*Исправить говно код и на комп-ты разбить */}
      </div>
    </article>
  )
}

export default MainPage
