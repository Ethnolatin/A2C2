import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  	return (<>
        <nav>
            <FaBars className="bars"/>
            <div className="navMenu">
                <Link className="navLink"
                  to="/" 
                >
                    Atelier A²C²
                </Link>
                <Link className="navLink"
                  to="/archi" 
                >
                    Architecture
                </Link>
                <Link className="navLink"
                  to="/aventure" 
                >
                    Aventure
                </Link>
                <Link className="navLink"
                  to="/couture" 
                >
                    Couture
                </Link>
                <Link className="navLink"
                  to="/comedie" 
                >
                    Comédie
                </Link>
                <Link className="navLink"
                  to="/about" 
                >
                    A propos
                </Link>
            </div> 
        </nav> 
    </>);
};

export default Navbar;