import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const [navListDisplay, setNavListDisplay] = useState(false)
    const toggleNavList = () => {
        setNavListDisplay(!navListDisplay);
    }

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

            <ul className= {`navMenu ${navListDisplay ? "comesIn" : "comesOut"}`}>
            {menuItems.map((menu, index) => {
                return (
                    <li className="menuItems">
                        {menu.submenu ? (<>
                            <button type="button" aria-haspopup="menu">
                                {menu.title}{" "}
                            </button>
                            <Dropdown submenus={menu.submenu} />
                        </>) : (
                            <Link
                                className="menu"
                                to={menu.page} 
                                onClick={() => toggleNavList()}
                            >
                                {menu.title}
                            </Link>
                        )}
                    </li>
                )
            })}
            </ul> 
        </nav> 
    </>);
};

export default Navbar;