import React from "react"
import {
  Card,
  ImageCard,
  TitleCard,
  DescriptionCard,
  LinkCard,
} from "./ToolCardStyled"

const ToolCard = ({ name, summary, img }) => {
  return (
    <Card>
      <ImageCard src={img} alt="Name" />
      <TitleCard>{name}</TitleCard>
      <DescriptionCard>{summary}</DescriptionCard>
      <LinkCard to="/">Read more</LinkCard>
    </Card>
  )
}

export default ToolCard
