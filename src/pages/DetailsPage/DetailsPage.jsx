import React, { useState, useEffect } from "react"
import {
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
} from "./DetailsPageStyled"
import { LoadingSpin, Loading } from "../../components/Loading/Loading"
import axios from "axios"
import { Container } from "../../components"
import { useParams, useNavigate } from "react-router-dom"

const DetailsPage = () => {
  const [projectDetail, setProjectDetail] = useState({})
  const [stackArray, setStackArray] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.put(`https://omur-api.herokuapp.com/api/visit/project/${id}`)
    axios
      .get("https://omur-api.herokuapp.com/api/projects")
      .then(({ data }) => {
        setProjectDetail(...data.filter((p) => p._id === id))
        setIsLoading(false)
      })
    setStackArray(projectDetail.stack)
  }, [id])

  return (
    <>
      <DetailsSection>
        <Container>
          <Wrapper>
            {isLoading ? (
              <>
                <Loading>
                  <LoadingSpin />
                </Loading>
              </>
            ) : (
              <>
                <ButtonBack onClick={() => navigate("/projects")}>
                  <i className="fa-solid fa-arrow-left"></i> Back
                </ButtonBack>
                <ImagesWrapper>
                  {!projectDetail.image ? (
                    <>
                      {" "}
                      <Image src="./img/3-website.jpg" alt="Image" />
                    </>
                  ) : (
                    <>
                      {projectDetail.image.map((i) => (
                        <Image key={i} src={i} alt={projectDetail.name} />
                      ))}
                    </>
                  )}
                </ImagesWrapper>

                <About>
                  <Items>
                    <Item>
                      <Bold>Name:</Bold>
                      <Span>&nbsp;{projectDetail.name}</Span>
                    </Item>
                    <Item>
                      <Bold>Project Type:</Bold>
                      <Span>&nbsp;{projectDetail.projectType}</Span>
                    </Item>
                    <Item>
                      <Bold>Paas:</Bold>
                      <Span>&nbsp;{projectDetail.paas}</Span>
                    </Item>
                    {projectDetail.date ? (
                      <Item>
                        <Bold>Date:</Bold>

                        <Span>&nbsp;{projectDetail.date}</Span>
                      </Item>
                    ) : (
                      <Item>
                        <Bold>Date:</Bold>

                        <Span>&nbsp;2022</Span>
                      </Item>
                    )}
                    <Item>
                      <Bold>Stack:</Bold>
                      <Span>
                        &nbsp;{projectDetail.stack.map((s) => s + ", ")}
                      </Span>
                    </Item>
                    <Item>
                      <Bold>Views:</Bold>
                      <Span>&nbsp;{projectDetail.views}</Span>
                    </Item>
                  </Items>

                  <Summury>
                    <Title>Description</Title>
                    <Description>{projectDetail.description}</Description>
                  </Summury>
                </About>

                <Links>
                  <LinkItem>
                    <Link href={`${projectDetail.demo}`}>
                      <i className="fa-solid fa-play"></i>Open Demo
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href={`${projectDetail.sourceCode}`}>
                      <i className="fa-brands fa-github"></i>Open Code
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href="#">
                      <i className="fa-solid fa-share-nodes"></i>Share
                    </Link>
                  </LinkItem>
                </Links>
              </>
            )}
          </Wrapper>
        </Container>
      </DetailsSection>
    </>
  )
}

export default DetailsPage
