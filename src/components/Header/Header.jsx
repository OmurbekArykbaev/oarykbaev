import React from "react"
import { Link } from "react-router-dom"
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
  SocialLinks,
} from "./HeaderStyled"

const Header = () => {
  return (
    <HeaderSection>
      <RectGreen />
      <RectOrange />
      <Container>
        <Wrapper>
          <About>
            <Title>Front-End Developer & Omurbek Arykbaev</Title>
            <Description>
              Hello, i am software engineer, and i am looking for a job as
              FrontEnd Developer. I have been learning Frontend Developing since
              2020, i use different tools, and have some projects in portfolio,
              you can see their <Link to="/projects">here</Link>. Also i will be
              glad if you check my linkedin profile down bellow.
            </Description>
            <SocialLinks>
              <a href="https://www.linkedin.com/in/oarykbaev">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/OmurbekArykbaev">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://t.me/Twonpix">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="mailto:firefoxer00@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://www.codewars.com/users/OmurbekArykbaev">
                <img src="/img/codewars.svg" alt="" />
              </a>
            </SocialLinks>
            <Button>Download CV</Button>
          </About>
          <ImageAvatar src="./img/about-me1.png" alt="Author" />
        </Wrapper>
      </Container>
    </HeaderSection>
  )
}

export default Header
