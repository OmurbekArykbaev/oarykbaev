import React from "react"
import { NavLink } from "react-router-dom"
import {
  Card,
  Image,
  Title,
  About,
  AboutItem,
  AboutItems,
  AboutTitle,
  Date,
  DateViews,
  Views,
  Description,
  Summury,
  Text,
  CardAction,
  DemoBtn,
} from "./PetProjectCardStyled"

const PetProjectCard = ({
  name,
  stack,
  date,
  description,
  sourceCode,
  id,
  views,
}) => {
  return (
    <Card>
      <Image />

      <Title>
        <About>
          <AboutTitle>{name}</AboutTitle>
          <AboutItems>
            {stack.map((s) => (
              <AboutItem key={s}>{s}</AboutItem>
            ))}
          </AboutItems>
        </About>
        <DateViews>
          <Date>
            <i className="fas fa-calendar-alt"></i> {date.slice(0, 7)}
          </Date>
          {views ? (
            <Views>
              <i className="fa-solid fa-eye">{views}</i>
            </Views>
          ) : (
            <></>
          )}
        </DateViews>
      </Title>

      <Description>
        <Summury>Summury</Summury>
        <Text>{description}</Text>
      </Description>

      <CardAction>
        <DemoBtn to={`/projects/details/${id}`}>Read More</DemoBtn>
        <NavLink to={sourceCode}>
          <i className="fa-brands fa-github"></i>
        </NavLink>
        <a href="/#">
          <i className="fa-solid fa-play"></i>
        </a>
      </CardAction>
    </Card>
  )
}

export default PetProjectCard
