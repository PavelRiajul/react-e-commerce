import { bestsellers } from "../../db/data"
import Products from "./Products"


function BestSeller() {
  return (
    <Products items={bestsellers} heading="Bestsellers"/>
  )
}

export default BestSeller