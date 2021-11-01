import React from "react"

const SocialLink = ({ href, fontAwesome }) => {
  return (
    <li className="bio__link">
      <a href={href} className="bio__social">
        <i className={fontAwesome}></i>
      </a>
    </li>
  )
}

export default SocialLink
