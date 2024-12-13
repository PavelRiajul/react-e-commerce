import Navbar from "../../Components/Navbar/Navbar"
import Products from "../../Components/Products/Products"
import Footer from "../../Components/Footer/Footer"
import { allProducts } from "../../db/data"
const AllProducts = () => {
  return (
    <div>
        <Navbar/>
        <Products heading="Products" items={allProducts}/>
        <Footer/>
    </div>
  )
}

export default AllProducts