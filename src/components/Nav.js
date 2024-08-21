import { useState } from "react";
import lemonLogo from '../images/Lemon-logo.svg'

function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo-image">
                <img src={lemonLogo} alt="Logo for Little Lemon" /> 
            </a>

            {/*Mobile Navigation Elements for Responsiveness*/}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>        
                <li><a href="/#about-link">About</a></li>
                <li><a href="/#menu-link">Menu</a></li>
                <li><a href="/booking">Reservations</a></li> 
                <li><a href="/#menu-link">Order Online</a></li> 
                <li><a href="/">Login</a></li>   
            </ul>
        </nav>
    )
}

export default Nav