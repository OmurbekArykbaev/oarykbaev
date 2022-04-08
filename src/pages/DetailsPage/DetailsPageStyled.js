import styled, { keyframes } from "styled-components"

const DetailsSection = styled.section`
  padding: 1rem;
  background-color: var(--secondary-color);
`
const Wrapper = styled.div`
  padding: 1rem;
`

const LoadingAnimation = keyframes`
  0%  {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`
const Loading = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingSpin = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--primary-color);
    border-color: var(--primary-color) transparent var(--primary-color)
      transparent;
    animation: ${LoadingAnimation} 1.2s linear infinite;
  }
`

const ButtonBack = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  font-weight: var(--fw-bold);
  border: 1px solid var(--primary-color);
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  text-transform: uppercase;

  & > i {
    padding-right: 0.5rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`
const ImagesWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;

  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`
const Image = styled.img`
  width: 350px;
  box-shadow: 1px 1px 5px #000;
`
const About = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: ; */
    margin-bottom: 2rem;
    padding: 0;
  }
`
const Items = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-start;

  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000;
  }
`
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 25px;
  font-weight: var(--fw-normal);
`
const Bold = styled.b``
const Span = styled.span``
const Summury = styled.article`
  width: 50%;

  @media (max-width: 800px) {
    padding-top: 2rem;
    width: 100%;
  }
`
const Title = styled.h3``
const Description = styled.p``
const Links = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`
const LinkItem = styled.li`
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const Link = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--text-color);
  text-decoration: none;
  font-size: 20px;
  line-height: 25px;
  padding: 0.5rem 2rem;
  border: 1px solid var(--primary-color);
  /* border-radius: var(--radii); */
  margin-right: 1rem;

  & > i {
    margin-right: 0.5rem;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
    font-size: 20px;
    line-height: 25px;
    padding: 0.5rem 2rem;
    border: 1px solid var(--primary-color);
    /* border-radius: var(--radii); */
    margin-right: 1rem;
  }
`

export {
  DetailsSection,
  Wrapper,
  ImagesWrapper,
  Image,
  About,
  Items,
  Item,
  Bold,
  Span,
  Summury,
  Title,
  Description,
  Links,
  LinkItem,
  Link,
  ButtonBack,
  LoadingSpin,
  Loading,
}
