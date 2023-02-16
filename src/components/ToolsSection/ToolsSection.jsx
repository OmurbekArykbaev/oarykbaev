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
    id: 1,
    name: "JavaScript ES6",
    summury:
      "Knowledge about ES6 features: All types Functions, Promise, Event-Loop. Hosting, Recursion, Fetch-api, Json, OOP etc.",
    img: "./img/tools/js.png",
  },
  {
    id: 2,
    name: "React",
    summury:
      "React 17+: JSX, Virtual DOM, Context, Native Hooks, Custom Hooks. React-Form, work with axios requests etc.",
    img: "./img/tools/react.png",
  },
  {
    id: 3,
    name: "Redux",
    summury:
      "Strong knowledge about Global Store, Actions, Reducer, CombineReucer etc. Work middleware as Redux thunk.",
    img: "./img/tools/redux.png",
  },
  {
    id: 4,
    name: "Git",
    summury:
      "Basic GIT commands: git commit, git push/pull. Work with branches: git merge, git rebase, git branch -d etc.",
    img: "./img/tools/git.png",
  },
  {
    id: 5,
    name: "Sass",
    summury: "Classic work with css, mixins, extends, variables, colors etc.",
    img: "./img/tools/sass.png",
  },
  {
    id: 6,
    name: "NodeJs",
    summury:
      "Have expirience with different NPM libraries such as: ExpressJs, Mongoose, Sequlize etc.",
    img: "./img/tools/node.png",
  },
  {
    id: 7,
    name: "ExpressJs",
    summury:
      "Work with basic commands: route, get, post, put/putch, delete. Create REST-API microservise.",
    img: "./img/tools/expr.png",
  },
]

const ToolsSection = () => {
  return (
    <ToolSection>
      <Container>
        <Wrapper>
          <Title>
            <Image src="./img/wave.png" alt="Wave" />
            <Services>My Tools</Services>
            <Description>
              The tools I am experienced in and working with at that moment.
            </Description>
          </Title>

          <Features>
            {data.map((tool, index) => (
              <ToolCard
                key={index}
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
