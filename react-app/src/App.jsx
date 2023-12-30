import About from "./Components/About"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import './index.css'

const App = () => {
  return (
    <div className = "bg-slate-900">
      <Nav />
      <Banner />
      <About />
    </div>
  )
}

export default App