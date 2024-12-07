import { IoMdSend } from "react-icons/io"
import "./Newsletter.css"

function Newsletter() {
  return (
    <div className="newsletter-container">
        <h1 className="newsletter-title">Newsletter</h1>
        <div className="newsletter-desc">What's Fresh and New: Updates You Don't want to Miss</div>
        <div className="input-container">
            <input type="text" placeholder="Your Email" className="newsletter-input" />
            <button className="newsletter-button">
              <IoMdSend/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter