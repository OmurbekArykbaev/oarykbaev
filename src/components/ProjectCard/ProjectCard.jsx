import React from "react"
import "./ProjectCard.scss"

const ProjectCard = ({ project }) => {
  return (
    <article className="card">
      <div className="card__inner">
        <div className="card__about">
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
        </div>

        <div className="card__description">
          <p>{project.description}</p>

          <div className="date-tools">
            <ul>
              {project.tools.map((item, idx) => (
                <li key={`${idx}_${item}`}>{item}</li>
              ))}
            </ul>
            <h6>
              <i className="far fa-calendar-alt"></i> {project.date}
            </h6>
          </div>
        </div>

        <div className="card__source">
          {project.demoBtn.visible ? (
            <a href={project.demoBtn.href} className="card__link">
              Demo
            </a>
          ) : (
            <></>
          )}
          {project.srcCode.visible ? (
            <a href={project.srcCode.href} className="card__link">
              Source
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
