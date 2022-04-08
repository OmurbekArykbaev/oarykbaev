import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  background: var(--light-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  border-radius: var(--fs-md);
  z-index: 50;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
const Title = styled.h3`
  font-family: var(--family-src);
  font-weight: var(--fw-normal);
  font-size: 1.5rem;
  line-height: 34px;
  color: var(--primary-color);
  margin: 30px 0 0 30px;

  @media (max-width: 480px) {
    font-size: 1.4 rem;
    line-height: 22px;
    font-weight: var(--fw-bold);
  }
`
const Description = styled.p`
  font-family: var(--family-rob);
  /* font-style: normal; */
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 22px;
  color: var(--primary-color);
  margin: 6px 0 26px 30px;

  @media (max-width: 480px) {
    font-size: var(--fs-sm);
    line-height: 22px;
  }
`
export { Card, Image, Title, Description }
