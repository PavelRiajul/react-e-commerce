import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"
import "./Slider.css"
import { sliderItems } from "../../db/data"
import { useState } from "react"

function Slider() {
    const [slideIndex, setSlideIndex]= useState(0);

    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex >0 ? slideIndex - 1:1)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    }
  return (
    <div className="slider-container">
       <div className="arrow" direction="left" onClick={()=> handleClick("left")}>
           <IoMdArrowDropleft className="icon"/>
       </div>

       <div className="slider-wrapper" style={{transform:`translatex(${slideIndex * -100}vw)`}}>
        {sliderItems.map((item)=>(
            <div key={item.id} className="slide" style={{backgroundColor:`#${item.bg}`}}>
                <div className="img-container">
                    <img src={item.img} alt="" className="img"/>
                </div>
                <div className="info-container">
                  <h1 className="title">{item.title}</h1>
                  <p className="desc">{item.desc}</p>
                  <button className="button">shope Now</button>
                </div>
            </div>
        ))}
       </div>
       <div className="arrow" direction="right" onClick={()=>handleClick("right")}>
           <IoMdArrowDropright className="icon"/>
       </div>
    </div>
  )
}

export default Slider