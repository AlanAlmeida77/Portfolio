import About from "./Components/About"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import './index.css'

const App = () => {
  return (
    <div className = "bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default App