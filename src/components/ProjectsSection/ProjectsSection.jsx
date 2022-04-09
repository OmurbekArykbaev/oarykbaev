import React, { useEffect, useState } from "react"
import { ProjectCard, Container } from "../index"
import axios from "axios"
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
import { Loading, LoadingSpin } from "../Loading/Loading"

const ProjectsSection = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://omur-api.herokuapp.com/api/projects")
      .then(({ data }) => {
        setIsLoading(false)
        data.length > 3
          ? setProjects(data.slice(0, 3))
          : setProjects(data.slice(0, data.length))
      })
  }, [])
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
            {isLoading ? (
              <Loading>
                <LoadingSpin />
              </Loading>
            ) : (
              <>
                {projects.map((p) => (
                  <ProjectCard key={p._id} project={p} />
                ))}
              </>
            )}
          </Features>
          <LinkBtn to="/projects">
            See more <i className="fa-solid fa-arrow-right-long"></i>
          </LinkBtn>
        </Wrapper>
      </Container>
      <RectPink></RectPink>
    </ProjectSection>
  )
}

export default ProjectsSection
