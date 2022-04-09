import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {
  Main,
  HomePage,
  ProjectsPage,
  DetailsPage,
  AdminPanelPage,
} from "./pages"

import { Navbar } from "./components/"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/details/:id" element={<DetailsPage />} />
            <Route path="/admin" element={<AdminPanelPage />} />
          </Routes>
        </Main>
      </Router>
    </>
  )
}

export default App
