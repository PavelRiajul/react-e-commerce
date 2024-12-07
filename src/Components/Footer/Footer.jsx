import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from "react-icons/fa"
import "./Footer.css"
import { CiTwitter } from "react-icons/ci"
import { footerLinks } from "../../db/data"
import { FaLocationDot } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import payment from "../../assets/payment-img-removebg-preview.png"
function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h1 className="footer-logo">Riajul Islam</h1>
            <p className="footer-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut officia rerum soluta provident magni adipisci.
            </p>
            <div className="social-container">
                <div className="social-icon" style={{backgroundColor:"#3b5999"}}>
                    <FaFacebook/>
                </div>
                <div className="social-icon" style={{backgroundColor:"#e44059"}}>
                    <FaInstagram/>
                </div>
                <div className="social-icon" style={{backgroundColor:"#55acee"}}>
                    <CiTwitter/>
                </div>
                <div className="social-icon" style={{backgroundColor:"#e60023"}}>
                    <FaPinterest/>
                </div>
            </div>
        </div>
        <div className="footer-center">
            <h3>useful Link</h3>
            <ul className="footer-list">
               {footerLinks.map((link)=>(
                <li key={link.id} className="footer-list-item">{link.title}</li>
               ))}
            </ul>
        </div>
        <div className="footer-right">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-item">
                <FaLocationDot style={{marginRight:"10px"}}/> 123 street,City
            </div>
            <div className="contact-item">
                <FaPhoneAlt style={{marginRight:"10px"}}/> 01902727439
            </div>
            <div className="contact-item">
                <IoMail style={{marginRight:"10px"}}/> riaju@gmail.com
            </div>
            <img className="payment" src={payment} alt="" />
        </div>
    </div>
  )
}

export default Footer