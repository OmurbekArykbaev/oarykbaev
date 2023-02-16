import React, { useState, useEffect } from "react"
import axios from "axios"

import { Container, PetProjectCard } from "../../components/"
import { LoadingSpin, Loading } from "../../components/Loading/Loading"
import { ProjectSection, Wrapper } from "./ProjectsPageStyled"

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://omur-api.herokuapp.com/api/projects")
      .then(({ data }) => {
        setIsLoading(false)
        setProjects(data.reverse())
      })
  }, [])

  return (
    <ProjectSection>
      <Container>
        <Wrapper>
          {isLoading ? (
            <Loading>
              <LoadingSpin />
            </Loading>
          ) : (
            (
              projects.map((project, index) => (
                <PetProjectCard key={index} {...project} />
              ))
            )
          )
          }
        </Wrapper>
      </Container>
    </ProjectSection>
  )
}

export default ProjectsPage
