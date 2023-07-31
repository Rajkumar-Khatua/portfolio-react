import { useContext } from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemedContext } from "./context";
import Footer from "./components/footer/Footer";
import Skils from "./components/Skils/Skils";
function App() {
  const theme = useContext(ThemedContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#000" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Navbar/> */}
      <Toggle />
      <Intro />
      <About />
      <Skils />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
