import { IoSearch } from "react-icons/io5"
import "./Navbar.css"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalItems = cartItems.length
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
            <Link to={"/"}><h1 className="navbar-logo">Rise of Coding</h1></Link>
        </div>
        <div className="navbar-right">
            <Link to="/register"><div className="navbar-menuItem">Register</div></Link>
            <Link to="/login"><div className="navbar-menuItem">Login</div></Link>
            <Link to={"/cart"}>
            <div className="navbar-menuItem">
                <MdOutlineShoppingCart className="icon"/>
                {/* <span className="cart-badge"></span> */}
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </div>
            </Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar