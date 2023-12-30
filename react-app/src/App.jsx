import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import './index.css'

const App = () => {
  return (
    <div className = "bg-slate-900">
      <Nav />
      <Banner />
    </div>
  )
}

export default App