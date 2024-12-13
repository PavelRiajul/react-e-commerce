import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Register from "./Pages/register/Register"
import Login from "./Pages/login/Login"
import AllProducts from "./Pages/AllProducts/AllProducts"
import SingleProduct from "./Pages/single-product/SingleProduct"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
    </div>
  )
}
export default App