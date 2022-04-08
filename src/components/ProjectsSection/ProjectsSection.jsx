import React from "react"
import { ProjectCard, Container } from "../index"
import {
  ProjectSection,
  Wrapper,
  Title,
  Image,
  AboutTitle,
  Description,
  Features,
  LinkBtn,
  RectPink,
} from "./ProjectsStyled"

const ProjectsSection = () => {
  return (
    <ProjectSection>
      <Container>
        <Wrapper>
          <Title>
            <Image src="./img/wave.png" alt="Wave" />
            <AboutTitle>My Lastest Projects</AboutTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </Description>
          </Title>

          <Features>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Features>
          <LinkBtn to="/">
            Preset store <i className="fa-solid fa-arrow-right-long"></i>
          </LinkBtn>
        </Wrapper>
      </Container>
      <RectPink></RectPink>
    </ProjectSection>
  )
}

export default ProjectsSection
