import React, { useState, useRef } from "react"
import { Container } from "../index"
import {
  Nav,
  Wrapper,
  Logo,
  CheckBtn,
  Items,
  Item,
  LinkBtn,
  MobileMenuList,
  MobileMenuItems,
  MobileMenuItem,
} from "./NavbarStyled.js"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useRef(null)

  const openMenuHandler = () => {
    setIsOpen(!isOpen)

    isOpen
      ? (toggleMenu.current.style.height = "0")
      : (toggleMenu.current.style.height = "50vh")
  }

  return (
    <Nav>
      <Container>
        <Wrapper>
          <Logo>oarykbaev</Logo>
          <CheckBtn onClick={openMenuHandler} htmlFor="check">
            {isOpen ? (
              <i className="fa-solid fa-xmark" />
            ) : (
              <i className="fa-solid fa-bars" />
            )}
          </CheckBtn>{" "}
          <Items>
            <Item>
              <LinkBtn to="/">Home</LinkBtn>
            </Item>
            <Item>
              <LinkBtn to="/projects">Projects</LinkBtn>
            </Item>
            {/* <Item>
              <LinkBtn to="/">Blog</LinkBtn>
            </Item> */}
            {/* <Item>
              <LinkBtn to="/">CV</LinkBtn>
            </Item> */}
            <Item>
              <LinkBtn to="/admin">admin</LinkBtn>
            </Item>
          </Items>
        </Wrapper>

        <MobileMenuList ref={toggleMenu}>
          {isOpen && (
            <MobileMenuItems onClick={openMenuHandler}>
              <MobileMenuItem>
                <LinkBtn to="/">Home</LinkBtn>
              </MobileMenuItem>
              <MobileMenuItem>
                <LinkBtn to="/projects">Projects</LinkBtn>
              </MobileMenuItem>
              <MobileMenuItem>
                <LinkBtn to="/admin">admin</LinkBtn>
              </MobileMenuItem>
            </MobileMenuItems>
          )}
        </MobileMenuList>
      </Container>
    </Nav>
  )
}

export default Navbar
