import React from "react"
import { description } from "../../Assets/database"

const SelfDescription = () => {
  return (
    <article className="description">
      <p className="description__text">👋🏼{description}</p>
    </article>
  )
}

export default SelfDescription
