import styled from "styled-components"

const HeaderSection = styled.header`
  position: relative;
  background-color: var(--secondary-color);
  margin-bottom: 120px;

  @media (max-width: 1024px) {
    position: relative;
    background-color: var(--light-color);
  }
`
const Wrapper = styled.div`
  height: calc(100vh - 77px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;

  @media (max-width: 1024px) {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const About = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Title = styled.h1`
  color: var(--primary-color);
  font-family: var(--family-src);
  font-weight: var(--fw-normal);
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    color: var(--primary-color);
    font-family: var(--family-src);
    font-weight: var(--fw-normal);
    font-size: 36px;
    line-height: 58px;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`
const Description = styled.p`
  color: var(--text-color);
  font-family: var(--family-rob);
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 22px;
  margin-bottom: 17px;

  @media (max-width: 1024px) {
    color: var(--text-color);
    font-family: var(--family-rob);
    font-weight: var(--fw-normal);
    font-size: var(--fs-md);
    line-height: 22px;
    margin-bottom: 17px;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: none;
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  border-radius: var(--radii);
  cursor: pointer;
  color: var(--light-color);
  font-family: var(--family-rob);
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 22px;

  z-index: 1;
`
const RectOrange = styled.div`
  bottom: -60px;
  left: 0;
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: url("../img/rect-orange.png");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  opacity: 0.5;
  z-index: 0;

  @media (max-width: 1024px) {
    display: none;
    bottom: 0px;
    left: 0px;
    position: absolute;
    width: 100px;
    height: 100px;
    background-image: url("../img/rect-orange.png");
    background-position: center;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: url("../img/rect-orange.png");
    background-position: center;
    background-repeat: no-repeat;
  }
`
const RectGreen = styled.div`
  right: 0;
  top: -200px;
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: url("../img/rect-green.png");
  background-position: center;
  background-repeat: no-repeat;

  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
    right: 0;
    top: -200px;
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: url("../img/rect-green.png");
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }
  @media (max-width: 768px) {
    right: 0;
    top: -200px;
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: url("../img/rect-green.png");
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }
`
const ImageAvatar = styled.img`
  display: block;
  width: 30%;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 40%;
    z-index: 1;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export {
  HeaderSection,
  Wrapper,
  About,
  Title,
  Description,
  Button,
  RectGreen,
  RectOrange,
  ImageAvatar,
}
