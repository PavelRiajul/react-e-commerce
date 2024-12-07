import { categories } from "../../db/data"
import "./Category.css"

function Category() {
  return (
    <div className="categories-container">
        {categories.map((item)=>(
            <div key={item.id} className="category-container">
                <img src={item.img} alt="" />
                <div className="category-info">
                  <h1>{item.title}</h1>
                  <button>shope Now</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Category