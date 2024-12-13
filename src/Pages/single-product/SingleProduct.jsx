import { useParams } from "react-router-dom"
import "./SingleProduct.css"
import { allProducts } from "../../db/data"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { useState } from "react"

const SingleProduct = () => {
    const {id} = useParams()
    const product = allProducts.find((product)=> product.id === parseInt(id));
    const colors = ["red","purple","teal","green","black"]
    const sizes = ["xs","s","m","l","xl","xxl"]
    const [selectedSize,setSelectedSize]=useState(null)
    const handleSizeClick =(size)=>{
        setSelectedSize(size)
    }
    const [selectedColor,setSelectedColor]=useState(null);
    const handleCircleClick = (color)=>{
        setSelectedColor(color)
    }
  return (
    <div className="singleProduct-container">
    <Navbar/>
    <div className="singleProduct-wrapper">
    <div className="singleProduct-imageSection">
        <img src={product.img} alt=""  className="singleProduct-image"/>
    </div>
    <div className="singleProduct-infoSection">
        <h2 className="singleProduct-title">{product.title}</h2>
        <p className="singleProduct-number">{product.price}</p>
        <h4 className="description-title">Description</h4>
        <p className="singleProduct-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque error accusamus aliquam quos illo modi aspernatur quo. Quisquam, ratione vel excepturi minima ullam facilis nesciunt error quod, ducimus laborum alias?
        </p>
        <div className="singleProduct-options">
            <div className="color-section">
                <h4>colors</h4>
                <div className="colors">
                    {
                        colors.map((color)=>(
                            <div key={color} className="color-circle" style={{backgroundColor:color,outline:selectedColor ===color ? `3px solid ${color}`:""}} onClick={()=>handleCircleClick(color)}></div>
                        )) }
                </div>
            </div>
        </div>
        <div className="sizes-section">
          <h4>Size</h4>
          <div className="sizes">
           {
            sizes.map((size)=>(
                <span key={size} style={{border:selectedSize ===size ? "1px solid #111":""}}
                onClick={()=>handleSizeClick(size)}>{size}</span>
            ))
           }
          </div>
        </div>
        <div className="addToCart">
            <button>Add to cart</button>
        </div>
    </div>
    </div>
   
    <Footer/>
    </div>
  )
}
export default SingleProduct