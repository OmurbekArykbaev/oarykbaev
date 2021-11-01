import React from "react"
import { description } from "./state/stateApp"

const SelfDescription = () => {
  return (
    <article className="description">
      <p className="description__text">&#128512;{description}</p>
    </article>
  )
}

export default SelfDescription
