import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"
import PaymentIcon from "../../assets/PaymentIcon"
import UsFlag from "../../assets/UsFlag"
import './index.css'

const Footer = () => (
    <footer className='website-footer-container'>
        <div className="footer-container-1">
            <div>
                <h1 className='footer-quote-1'>BE THE FIRST TO KNOW</h1>
                <p className='footer-quote-2 large-quote'>Sign up for updates from mettā muse.</p>
                <div className='footer-email-input-container'>
                    <input type="email" placeholder='Enter your e-mail..' className='email-input-field'/>
                    <button type="button" className='footer-subscribe-button'>SUBSCRIBE</button>
                </div>
                <hr className="hr-line"/>
            </div>
            
            <div>
                <div>
                    <h1 className='footer-quote-1 quote-mobile'>CONTACT US</h1>
                    <h1 className="footer-quote-mobile-1">CALL US</h1>
                    <div className="contact-container">
                        <p className='footer-quote-2'>+44 221 133 5360</p>
                        <p className='footer-quote-2 customer-quote'>customercare@mettamuse.com</p>
                    </div>
                </div>
                <hr className="hr-line"/>
                <div>
                    <h1 className='footer-quote-1'>CURRENCY</h1>
                    <div className="flag-container">
                        <UsFlag/>
                        <p className='footer-quote-2'> . USD</p>
                    </div>
                    <p className='footer-quote-2 currency-desc'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-container-2">
            <div className="footer-quotes-field">
                <h1 className='footer-quote-1'>mettā muse</h1>
                <p className='footer-quote-2'>About Us</p>
                <p className='footer-quote-2'>Stories</p>
                <p className='footer-quote-2'>Artisans</p>
                <p className='footer-quote-2'>Boutiques</p>
                <p className='footer-quote-2'>Contact Us</p>
                <p className='footer-quote-2'>EU Compliances Docs</p>
            </div>
            <div className="drop-down-container">
                <select  className="drop-down"  name="mettā muse" id="metta">
                    <option value="mettā muse">mettā muse</option>
                    <option value="About Us">About Us</option>
                    <option value="Stories">Stories</option>
                    <option value="Artisans">Artisans</option>
                    <option value="Boutiques">Boutiques</option>
                    <option value="Contact Us">Contact Us</option>
                    <option value="Eu Compliances Docs">Eu Compliances Docs</option>
                </select>
                <hr/>
            </div>
            <div  className="footer-quotes-field">
                <h1 className='footer-quote-1'>QUICK LINKS</h1>
                <p className='footer-quote-2'>Orders & Shipping</p>
                <p className='footer-quote-2'>Join/Login as a seller</p>
                <p className='footer-quote-2'>Payment & Pricing</p>
                <p className='footer-quote-2'>Return & Refunds</p>
                <p className='footer-quote-2'>FAQs</p>
                <p className='footer-quote-2'>Privacy Policy</p>
                <p className='footer-quote-2'>Terms & Conditions</p>
            </div>
            <div className="drop-down-container">
                <select className="drop-down" name="Quick Links" id="quick">
                    <option value="QUICK LINKS">QUICK LINKS</option>
                    <option value="Orders & Shipping">Orders & Shipping</option>
                    <option value="Join/Login as a seller">Join/Login as a seller</option>
                    <option value="Payment & Pricing">Payment & Pricing</option>
                    <option value="Return & Refunds">Return & Refunds</option>
                    <option value="FAQs">FAQs</option>
                    <option value="Privacy Policy">Privacy Policy</option>
                    <option value="Terms & Conditions">Terms & Conditions</option>
                </select>
                <hr/>
            </div>
            <div>
                <div  className="footer-quotes-field">
                    <h1 className='footer-quote-1'>FOLLOW US</h1>
                    <div className="footer-icon">
                        <RiInstagramFill/>
                        <FaLinkedin/>
                    </div>
                </div>
                <div  className="drop-down-container">
                    <select  className="drop-down" name="follow" id="follow">
                        <option value="follow">FOLLOW US</option>
                    </select>
                    <hr className="hr-line"/>
                </div>
                <div className="footer-payment-quote-1">
                    <h1 className='footer-quote-1 '>mettā muse Accepts</h1>
                    <PaymentIcon className="payment-icon"/>
                </div>
            </div>
        </div>
        <p className="footer-bottom-line">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
)


export default Footer