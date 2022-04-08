import React from "react"
import { Container } from "../index"
import {
  HeaderSection,
  Wrapper,
  About,
  Title,
  Description,
  Button,
  RectGreen,
  RectOrange,
  ImageAvatar,
} from "./HeaderStyled"

const Header = () => {
  return (
    <HeaderSection>
      <RectGreen />
      <RectOrange />
      <Container>
        <Wrapper>
          <About>
            <Title>Hi, I'm Omurbek Arykbaev & I'm a Front-End Developer.</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </Description>
            <Button>Download CV</Button>
          </About>
          <ImageAvatar src="./img/about-me1.png" alt="Author" />
        </Wrapper>
      </Container>
    </HeaderSection>
  )
}

export default Header
