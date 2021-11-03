import AboutMe from "./components/AboutMe/AboutMe"
import MainFooter from "./components/Footer/MainFooter"
import Navbar from "./components/Navbar/Navbar"
import SelfDescription from "./components/AboutMe/SelfDescription"

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
