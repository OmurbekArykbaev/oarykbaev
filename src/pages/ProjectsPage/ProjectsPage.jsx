import React, { useState, useEffect } from "react"
import { Container, PetProjectCard } from "../../components/"
import { ProjectSection, Wrapper } from "./ProjectsPageStyled"
import axios from "axios"
import { LoadingSpin, Loading } from "../../components/Loading/Loading"

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
    <>
      <ProjectSection>
        <Container>
          <Wrapper>
            {isLoading ? (
              <>
                <Loading>
                  <LoadingSpin />
                </Loading>
              </>
            ) : (
              <>
                {projects.map((p) => (
                  <PetProjectCard
                    key={p._id}
                    id={p._id}
                    name={p.name}
                    stack={p.stack}
                    description={p.description}
                    demo={p.demo}
                    sourceCode={p.sourceCode}
                    image={p.image}
                    date={p.date}
                    views={p.views}
                  />
                ))}
              </>
            )}
          </Wrapper>
        </Container>
      </ProjectSection>
    </>
  )
}

export default ProjectsPage
