import "./app.scss"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/about/About"
import Intro from "./components/intro/Intro"

function App() {
return (
  <div className="app">
    {/* <Navbar/> */}
    <Intro/>
    <About/>
    <Portfolio/>
  </div>
  )
}

export default App
