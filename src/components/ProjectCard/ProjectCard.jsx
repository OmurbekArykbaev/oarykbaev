import React from "react"
import { Card, Image, Title, Description } from "./ProjectCardStyled"

const ProjectCard = ({ project }) => {
  return (
    <Card to={`/projects/details/${project._id}`}>
      <Image src={project.image[0]} alt="" />
      <Title> {project.stack.map((s) => s + ", ")}</Title>
      <Description>{project.description}</Description>
    </Card>
  )
}

export default ProjectCard
