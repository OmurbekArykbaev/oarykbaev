import React, { useReducer, useRef, useEffect } from "react"
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
  const [isOpen, toggleIsOpen] = useReducer(state => !state, true)
  const toggleMenu = useRef()

  useEffect(() => {
    if (isOpen) {
      toggleMenu.current.style.height = "0"
    }
    else {
      toggleMenu.current.style.height = "50vh"
    }
  }, [isOpen])

  return (
    <Nav>
      <Container>
        <Wrapper>
          <Logo>oarykbaev</Logo>
          <CheckBtn onClick={toggleIsOpen} htmlFor="check">
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
            {/* <Item>
              <LinkBtn to="/admin">admin</LinkBtn>
            </Item> */}
          </Items>
        </Wrapper>

        <MobileMenuList ref={toggleMenu}>
          {!isOpen && (
            <MobileMenuItems onClick={toggleIsOpen}>
              <MobileMenuItem>
                <LinkBtn to="/">Home</LinkBtn>
              </MobileMenuItem>
              <MobileMenuItem>
                <LinkBtn to="/projects">Projects</LinkBtn>
              </MobileMenuItem>
              {/* <MobileMenuItem>
                <LinkBtn to="/admin">admin</LinkBtn>
              </MobileMenuItem> */}
            </MobileMenuItems>
          )}
        </MobileMenuList>
      </Container>
    </Nav>
  )
}

export default Navbar
