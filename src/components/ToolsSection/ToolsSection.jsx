import React from "react"
import { Container, ToolCard } from "../index"

import {
  ToolSection,
  Wrapper,
  Title,
  Image,
  Services,
  Description,
  Features,
  RectGreen,
} from "./ToolsStyled"

const ToolsSection = () => {
  return (
    <ToolSection>
      <Container>
        <Wrapper>
          <Title>
            <Image src="./img/wave.png" alt="Wave" />
            <Services>What I Use.</Services>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </Description>
          </Title>

          <Features>
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
          </Features>
        </Wrapper>
      </Container>
      <RectGreen />
    </ToolSection>
  )
}

export default ToolsSection
