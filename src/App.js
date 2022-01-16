import MainPage from "./pages/MainPage/MainPage"
import WorkPage from "./pages/WorkPage/WorkPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<WorkPage />} />
      </Routes>
    </Router>
  )
}

export default App
