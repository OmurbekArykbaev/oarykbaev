import React, { useState, useEffect } from "react"
import { Container } from "../../components"
import axios from "axios"
import {
  Wrapper,
  Banner,
  ButtonCreate,
  Form,
  InputText,
  TextArea,
  Submit,
} from "./AdminPanelPageStyled"

const AdminPanelPage = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const [stack, setStack] = useState("")
  const [description, setDescription] = useState("")
  const [paas, setPaas] = useState("")
  const [projectType, setProjectType] = useState("")
  const [demo, setDemo] = useState("")
  const [sourceCode, setSourceCode] = useState("")
  const [response, setResponse] = useState("")

  const postRequest = async () => {
    await axios
      .post("https://omur-api.herokuapp.com/api/projects")
      .then(({ data }) => {
        setId(data._id)
        setName(data.name)
        setImage(data.image)
        setDate(data.date)
        setStack(data.stack)
        setDescription(data.description)
        setPaas(data.paas)
        setProjectType(data.projectType)
        setDemo(data.demo)
        setSourceCode(data.sourceCode)
      })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const project = {
      name,
      image,
      date,
      stack,
      description,
      paas,
      projectType,
      demo,
      sourceCode,
      views: 0,
    }

    await axios
      .put(`https://omur-api.herokuapp.com/api/projects/${id}`, project)
      .then(({ data }) => setResponse(data))
  }

  useEffect(() => {}, [])
  return (
    <section>
      <Container>
        <Wrapper>
          {response ? (
            <Banner>
              <p>{response}</p>
            </Banner>
          ) : (
            <></>
          )}

          <ButtonCreate onClick={() => postRequest()}>
            Create new Projects
          </ButtonCreate>

          <Form action="put">
            <InputText
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="name"
            />
            <InputText
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="image"
            />
            <InputText
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="text"
              placeholder="date"
            />

            <InputText
              onChange={(e) => setStack(e.target.value)}
              value={stack}
              type="text"
              placeholder="stack"
            />
            <TextArea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder="description"
            />
            <InputText
              onChange={(e) => setPaas(e.target.value)}
              value={paas}
              type="text"
              placeholder="paas"
            />
            <InputText
              onChange={(e) => setProjectType(e.target.value)}
              value={projectType}
              type="text"
              placeholder="type"
            />
            <InputText
              onChange={(e) => setSourceCode(e.target.value)}
              value={sourceCode}
              type="text"
              placeholder="source"
            />
            <InputText
              onChange={(e) => setDemo(e.target.value)}
              value={demo}
              type="text"
              placeholder="demo"
            />

            <Submit
              onClick={(e) => onSubmitHandler(e)}
              type="submit"
              value="Add"
            />
          </Form>
        </Wrapper>
      </Container>
    </section>
  )
}

export default AdminPanelPage
