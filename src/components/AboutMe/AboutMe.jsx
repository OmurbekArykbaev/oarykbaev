import React from "react"
import Bio from "./Bio"
import SocialLink from "./SocialLink"
import { skills, SocialLinks } from "../../Assets/database"

const AboutMe = () => {
  return (
    <article className="main-content">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="Avatar"
      />

      <div className="bio">
        <Bio />
        <ul className="bio__inner-list">
          {skills.map((item, index) => (
            <li className="bio__item" key={`${index}_${item}`}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="bio__inner-social-link">
          {SocialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              fontAwesome={link.fontAwesome}
            />
          ))}
        </ul>
      </div>
    </article>
  )
}

export default AboutMe
