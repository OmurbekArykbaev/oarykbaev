import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
  background: #f4f3f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 44px;
  border-radius: var(--fs-md);
  z-index: 50;

  @media (max-width: 768px) {
    text-align: left;
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 22px;
  }
`
const ImageCard = styled.img`
  margin-bottom: 1rem;
`
const TitleCard = styled.h3`
  font-family: var(--family-src);
  color: var(--primary-color);
  font-weight: var(--fw-normal);
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 22px;
    font-weight: var(--fw-bold);
  }
`
const DescriptionCard = styled.p`
  font-family: var(--family-rob);
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 22px;
  color: var(--text-color);
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    text-align: left;
    font-size: var(--fs-sm);
    line-height: 28px;
  }
  }
`
const LinkCard = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  line-height: 24px;
`

export { Card, ImageCard, TitleCard, DescriptionCard, LinkCard }
