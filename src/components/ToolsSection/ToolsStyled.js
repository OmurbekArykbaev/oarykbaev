import styled from "styled-components"

const ToolSection = styled.section`
  position: relative;
  margin-bottom: 147px;
`
const Wrapper = styled.div`
  height: 100%;
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
const Services = styled.h1`
  font-family: var(--family-src);
  color: var(--primary-color);
  text-align: center;
  font-weight: var(--fw-normal);
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 11px;

  @media (max-width: 768px) {
    font-family: var(--family-src);
    color: var(--primary-color);
    text-align: center;
    font-weight: var(--fw-normal);
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 11px;
  }
`
const Description = styled.div`
  width: 590px;
  text-align: center;
  font-family: var(--secondary-color);
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 22px;

  @media (max-width: 768px) {
    padding: 2rem;
    width: 100%;
    text-align: center;
    font-family: var(--secondary-color);
    font-weight: var(--fw-normal);
    font-size: var(--fs-md);
    line-height: 22px;
  }
`
const Features = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;

  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
`
const RectGreen = styled.div`
  left: -200px;
  bottom: -200px;
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: url("../img/rect-green.png");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  transform: rotate(180deg);
  z-index: 1;
`

export {
  ToolSection,
  Wrapper,
  Title,
  Image,
  Services,
  Description,
  Features,
  RectGreen,
}
