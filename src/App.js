import AboutMe from "./components/AboutMe/AboutMe"
import MainFooter from "./components/MainFooter"
import Navbar from "./components/Navbar/Navbar"
import SelfDescription from "./components/SelfDescription"

function App() {
  return (
    <header className="header">
      <Navbar />
      <AboutMe />
      <SelfDescription />
      <MainFooter />
    </header>
  )
}

export default App
