import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import axios from "axios"
import { Main, HomePage, ProjectsPage, DetailsPage } from "./pages"
import { Navbar } from "./components/"

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get("https://omur-api.herokuapp.com/api/projects")
      .then(({ data }) => setProjects(data))
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projects"
              element={<ProjectsPage projects={projects} />}
            />
            <Route
              path="/projects/details/:id"
              projects={projects}
              element={<DetailsPage />}
            />
          </Routes>
        </Main>
      </Router>
    </>
  )
}

export default App
