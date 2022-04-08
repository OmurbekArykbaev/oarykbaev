import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = styled.nav`
  position: relative;
  padding: 1rem 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  z-index: 100;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`
const Logo = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-family: var(--family-src);
  font-size: 30px;
`
const Check = styled.input`
  display: none;

  &:checked ~ ul {
    left: 0;
  }
`
const CheckBtn = styled.label`
  display: none;
  font-size: 30px;
  float: right;

  @media (max-width: 480px) {
    display: block;
  }
`
const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: beige;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
`
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-right: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 4rem;
  }
`
const LinkBtn = styled(Link)`
  font-weight: var(--fw-normal);
  color: var(--primary-color);
  font-size: var(--fs-md);
  line-height: var(--fs-md);
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom: 1px solid var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: var(--fw-bold);
    line-height: 45px;
  }
`

export { Nav, Wrapper, Logo, Check, CheckBtn, Items, Item, LinkBtn }
