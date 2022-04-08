import React from "react"
import {
  Card,
  ImageCard,
  TitleCard,
  DescriptionCard,
  LinkCard,
} from "./ToolCardStyled"

const ToolCard = () => {
  return (
    <Card>
      <ImageCard src="./img/icon.png" alt="Name" />
      <TitleCard>Wedding Photography</TitleCard>
      <DescriptionCard>
        Wedding photography is often called the bread and butter of
        photographers — but that doesn't mean it has to be boring. Quite the
        opposite!
      </DescriptionCard>
      <LinkCard to="/">Read more</LinkCard>
    </Card>
  )
}

export default ToolCard
