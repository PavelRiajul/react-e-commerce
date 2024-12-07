import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Register from "./Pages/register/Register"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App