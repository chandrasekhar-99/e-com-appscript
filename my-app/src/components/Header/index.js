import { CiSearch } from "react-icons/ci"
import { PiHeartLight } from "react-icons/pi"
import { PiBagLight } from "react-icons/pi"
import { GoPerson } from "react-icons/go"
import { CiMenuBurger } from "react-icons/ci"
import './index.css'

const Header = () => (
    <nav className="header-container">
            <div className="header-component-1">
                <CiMenuBurger className="nav-mobile-menu"/>
                <img src="https://res.cloudinary.com/ddyatvsai/image/upload/v1712468260/Vector_yt5bhi.jpg" alt="logo" className="website-logo"/>
                <h1 className="website-title">LOGO</h1>
                <div className="header-icons-container">
                    <CiSearch className="nav-icon"/>
                    <PiHeartLight className="nav-icon"/>
                    <PiBagLight className="nav-icon"/>
                    <GoPerson className="nav-icon-person"/>
                    <select name="language" id="language" className="website-language">
                        <option value="english">ENG</option>
                        <option value="hindi">HIN</option>
                    </select>
                </div>
            </div>
            <div className="header-component-2">
                <p className="nav-names">SHOP</p>
                <p className="nav-names">SKILLS</p>
                <p className="nav-names">STORIES</p>
                <p className="nav-names">ABOUT</p>
                <p className="nav-names">CONTACT US</p>
            </div>
    </nav>
)

export default Header