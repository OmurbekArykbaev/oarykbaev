import React, { useRef, useEffect } from "react"
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
  Summary,
  Text,
  CardAction,
  DemoBtn,
} from "./PetProjectCardStyled"

const shortenIfTooBig = (text, maxLength) => {
  if (text.length < maxLength) {
    return text + " "
  }

  return text.slice(0, maxLength) + " ..."
}

const PetProjectCard = ({
  name,
  stack,
  date,
  description,
  sourceCode,
  id,
  views,
  image,
}) => {
  const imageCard = useRef()

  useEffect(() => {
    imageCard.current.style.backgroundImage = `url(${image})`
  }, [image])

  return (
    <Card>
      <Image ref={imageCard} />
      <Title>
        <About>
          <AboutTitle>{name}</AboutTitle>
          <AboutItems>
            {stack.map((item, index) => (
              <AboutItem key={index}>{item}</AboutItem>
            ))}
          </AboutItems>
        </About>
        <DateViews>
          <Date>
            <i className="fas fa-calendar-alt"></i> {date.slice(0, 7)}
          </Date>
          {views && (
            <Views><i className="fa-solid fa-eye">{views}</i></Views>
          )}
        </DateViews>
      </Title>

      <Description>
        <Summary>Summary</Summary>
        <Text>
          {shortenIfTooBig(description, 157)}
        </Text>
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
