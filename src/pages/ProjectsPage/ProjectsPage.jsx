import React from "react"
import { Container, PetProjectCard } from "../../components/"
import { ProjectSection, Wrapper } from "./ProjectsPageStyled"

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <ProjectSection>
        <Container>
          <Wrapper>
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
              />
            ))}
          </Wrapper>
        </Container>
      </ProjectSection>
    </>
  )
}

export default ProjectsPage
