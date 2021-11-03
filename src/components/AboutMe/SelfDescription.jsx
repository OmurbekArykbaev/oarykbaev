import React from "react"
import { description } from "../state/stateApp"

const SelfDescription = () => {
  return (
    <article className="description">
      <p className="description__text">👋🏼{description}</p>
    </article>
  )
}

export default SelfDescription
