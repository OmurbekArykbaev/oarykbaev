import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import { cardWork } from "../../Assets/database"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./WorkPage.scss"

const Works = () => {
  return (
    <section className="workpage">
      <Navbar />
      <div className="workpage__inner">
        {cardWork.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  )
}

export default Works
