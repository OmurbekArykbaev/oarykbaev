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

const data = [
  {
    name: "JavaScript ES6",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/js.png",
  },
  {
    name: "React",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/react.png",
  },
  {
    name: "Redux",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/redux.png",
  },
  {
    name: "Git",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/git.png",
  },
  {
    name: "Styled-Components",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/styled.png",
  },
  {
    name: "NodeJs",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/node.png",
  },
  {
    name: "ExpressJs",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/expr.png",
  },
  {
    name: "TypeScript",
    summury:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "./img/tools/ts.png",
  },
]

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
            {data.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                summury={tool.summury}
                img={tool.img}
              />
            ))}
          </Features>
        </Wrapper>
      </Container>
      <RectGreen />
    </ToolSection>
  )
}

export default ToolsSection
