import Announcement from "../../Components/Announcement/Announcement"
import Category from "../../Components/Category/Category"
import Navbar from "../../Components/Navbar/Navbar"
import Slider from "../../Components/Slider/Slider"


function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Category/>
    </div>
  )
}

export default Home