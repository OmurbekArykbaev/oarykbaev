import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
  width: 300px;
  height: 490px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: var(--light-color); */
  background-color: #1e1b26;
  box-shadow: 5px 5px 115px -14px black;
  border-radius: 4px;
  text-decoration: none;
`
const Image = styled.img`
  width: 100%;
  height: 40%;
  // background-image: url(https://softwareengineeringdaily.com/wp-content/uploads/2018/11/reactComponents.png);
  // background-image: url(./img/2-website.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* z-index: 111 !important; */
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );

  position: relative;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`
const About = styled.div`
  display: flex;
  flex-direction: column;
`
const AboutTitle = styled.h1`
  font-size: 18px;
  font-weight: var(--fw-sm);
  color: #fff;
`
const AboutItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const AboutItem = styled.li`
  color: #fe4141;
  font-size: 14px;
  list-style: none;
  margin-right: 0.5rem;
`
const DateViews = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: column;
  color: #fff;
`
const Date = styled.h5`
  text-align: right;
  font-size: 11px;
  font-weight: var(--fw-sm);
`
const Views = styled.p`
  text-align: right;
  font-size: 11px;
  font-weight: var(--fw-sm);
`
const Description = styled.div`
  padding: 1rem;
`
const Summury = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: var(--fw-sm);
`
const Text = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 2rem;
`
const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 2rem;

  & > a {
    font-size: 20px;
    text-decoration: none;
    color: #fe4141;
    font-weight: bold;
  }
`
const DemoBtn = styled(Link)`
  font-size: var(--fw-sm) !important;
  text-align: center;
  font-weight: 300 !important;
  color: #fe4141;
  border: 1px solid #fe4141;
  display: block;
  border: 1px solid #fe4141;
  border-radius: 5px;
  padding: 4px;
  width: 140px;
`

export {
  Card,
  Image,
  Title,
  About,
  AboutItem,
  AboutItems,
  AboutTitle,
  Date,
  DateViews,
  Views,
  Description,
  Summury,
  Text,
  CardAction,
  DemoBtn,
}
// const GitHubBtn = styled.a``
// const ShareBtn = styled.a``
