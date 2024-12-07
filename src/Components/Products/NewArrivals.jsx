import Products from "./Products"
import {newArrivals} from "../../db/data"
function NewArrivals() {
  return (
    <Products items={newArrivals} heading="new Arrivals"/>
  )
}
export default NewArrivals