import Announcement from "../../Components/Announcement/Announcement"
import Category from "../../Components/Category/Category"
import Navbar from "../../Components/Navbar/Navbar"
import Newsletter from "../../Components/Newsletter/Newsletter"
import BestSeller from "../../Components/Products/BestSeller"
import NewArrivals from "../../Components/Products/NewArrivals"
import Slider from "../../Components/Slider/Slider"


function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Category/>
        <NewArrivals/>
        <BestSeller/>
        <Newsletter/>
    </div>
  )
}

export default Home