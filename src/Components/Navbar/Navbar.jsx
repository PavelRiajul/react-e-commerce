import { IoSearch } from "react-icons/io5"
import "./Navbar.css"
import { MdOutlineShoppingCart } from "react-icons/md"

function Navbar() {
  return (
    <nav className="navbar-container">
        <div className="navbar-wrapper">
           <div className="navbar-left">
            <span className="navbar-language">EN</span>
            <div className="navbar-search-container">
            <input type="text" placeholder="Search" className="navbar-input"/>
            <IoSearch className="icon"/>
            </div>
           </div>
           <div className="navbar-center">
           <h1 className="navbar-logo">Rise of Coding</h1>
        </div>
        <div className="navbar-right">
            <div className="navbar-menuItem">Register</div>
            <div className="navbar-menuItem">Login</div>
            <div className="navbar-menuItem">
                <MdOutlineShoppingCart className="icon"/>
                <span className="cart-badge"></span>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar