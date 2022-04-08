import React from "react"
import { Card, Image, Title, Description } from "./ProjectCardStyled"

const ProjectCard = () => {
  return (
    <Card to="/">
      <Image src="/img/card-img.jpg" alt="" />
      <Title>Mirro Preset Pack Vol. 01</Title>
      <Description>
        The first volume is my go-to presets when shooting action sports. Just
        the right amount of contrast and highlights to make your photo
        (literally) pop!
      </Description>
    </Card>
  )
}

export default ProjectCard
