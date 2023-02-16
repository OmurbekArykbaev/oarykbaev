import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {
  HomePage,
  ProjectsPage,
  DetailsPage,
  AdminPanelPage,
} from "./pages"
import { Navbar } from "./components/"

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/details/:id" element={<DetailsPage />} />
          <Route path="/admin" element={<AdminPanelPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
