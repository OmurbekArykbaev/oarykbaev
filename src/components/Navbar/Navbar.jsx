import React from "react"
import { Container } from "../index"
import {
  Nav,
  Wrapper,
  Logo,
  Check,
  CheckBtn,
  Items,
  Item,
  LinkBtn,
} from "./NavbarStyled.js"

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Wrapper>
          <Logo to="/">Omurbek</Logo>
          <Check type="checkbox" id="check" />
          <CheckBtn htmlFor="check">
            <i className="fa-solid fa-bars"></i>
          </CheckBtn>{" "}
          <Items>
            <Item>
              <LinkBtn to="/projects">Projects</LinkBtn>
            </Item>

            <Item>
              <LinkBtn to="/">Blog</LinkBtn>
            </Item>
            <Item>
              <LinkBtn to="/">CV</LinkBtn>
            </Item>
            <Item>
              <LinkBtn to="/">Contacts</LinkBtn>
            </Item>
          </Items>
        </Wrapper>
      </Container>
    </Nav>
  )
}

export default Navbar
