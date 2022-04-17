import React, { useState, useEffect } from "react"
import { Container } from "../../components"
import axios from "axios"
import {
  Wrapper,
  ButtonCreate,
  Form,
  InputText,
  TextArea,
  Submit,
} from "./AdminPanelPageStyled"
import { useNavigate } from "react-router-dom"

const AdminPanelPage = () => {
  const navigate = useNavigate()
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
  // const [newError, setNewError] = useState("")
  const [openForm, setOpenForm] = useState(true)
  const [openProjectList, setOpenProjectList] = useState(false)
  const [projects, setProjects] = useState([])

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

    await axios.put(
      `https://omur-api.herokuapp.com/api/projects/${id}`,
      project
    )

    navigate("/projects")
  }

  const onRemoveHandler = async (projectid) => {
    await axios.delete(
      `https://omur-api.herokuapp.com/api/projects/${projectid}`
    )
  }

  useEffect(() => {
    axios
      .get("https://omur-api.herokuapp.com/api/projects")
      .then(({ data }) => {
        setProjects(data.reverse())
      })
  }, [])
  return (
    <section>
      <Container>
        <Wrapper>
          {/* {newError ? (
            <Banner>
              <p>{newError}</p>
            </Banner>
          ) : (
            <></>
          )} */}
          <button onClick={() => setOpenForm(!openForm)}>+</button>
          {openForm && (
            <>
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
            </>
          )}
          <button onClick={() => setOpenProjectList(!openProjectList)}>
            +
          </button>
          {openProjectList && (
            <>
              {projects.map((p) => (
                <li key={p._id}>
                  {p.name}
                  <button onClick={() => onRemoveHandler(p._id)}>Delete</button>
                </li>
              ))}
            </>
          )}
        </Wrapper>
      </Container>
    </section>
  )
}

export default AdminPanelPage
