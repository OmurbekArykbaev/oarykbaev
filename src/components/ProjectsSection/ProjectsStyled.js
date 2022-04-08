import styled from "styled-components"
import { Link } from "react-router-dom"

const ProjectSection = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  background-color: var(--secondary-color);
`
const Wrapper = styled.div`
  position: relative;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Title = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 47px;
`
const Image = styled.img`
  width: 160px;
  margin-bottom: 1rem;
`

const AboutTitle = styled.h1`
  font-family: var(--family-src);
  color: #db343b;
  text-align: center;
  font-weight: var(--fw-normal);
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 11px;
`
const Description = styled.p`
  width: 590px;
  text-align: center;
  font-family: var(--secondary-color);
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 22px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`
const Features = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  margin: 0 auto;
`
const LinkBtn = styled(Link)`
  font-family: var(--family-rob);
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 24px;
  color: var(--primary-color);
  text-decoration: none;
  margin-top: 30px;

  i {
    margin-left: 0.3rem;
  }
`
const RectPink = styled.div`
  position: absolute;
  height: 501px;
  left: 78.96%;
  right: -14.79%;
  top: 587px;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 185, 185, 1) 0%,
    rgba(54, 206, 240, 0) 56%,
    rgba(0, 212, 255, 0.0032387955182072714) 100%
  );
  z-index: 0;
  opacity: 0.5;
`

export {
  ProjectSection,
  Wrapper,
  Title,
  Image,
  AboutTitle,
  Description,
  Features,
  LinkBtn,
  RectPink,
}
