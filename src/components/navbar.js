import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
    const [navListDisplay, setNavListDisplay] = useState(false)
    const toggleNavList = () => {
        setNavListDisplay(!navListDisplay);
    }

const navLinks = [
    { page: "/", title: "Atelier A²C²"},
    { page: "/archi", title: "Architecture"},
    { page: "/aventure", title: "Aventure"},
    { page: "/couture", title: "Couture"},
    { page: "/comedie", title: "Comédie"},
    { page: "/about", title: "A propos"},
]
    
  	return (<>
        <nav>
            <button
                type="button"
                className="hamburger"
                onClick={() => toggleNavList()}
            >
                <div className={`threeBars ${navListDisplay ? "arrow" : ""}`}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </button>

            <div className= {`navMenu ${navListDisplay ? "comesIn" : "comesOut"}`}>
            {navLinks.map(navLink => {
                return (
                    <div key={navLinks.indexOf(navLink)} className="navButton">
                        <Link
                            className="navLink"
                            to={navLink.page} 
                            onClick={() => toggleNavList()}
                        >
                            {navLink.title}
                        </Link>
                    </div>
                )
            })}
            </div> 
        </nav> 
    </>);
};

export default Navbar;