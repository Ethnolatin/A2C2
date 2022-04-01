import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { menuItems } from "./menuItems";

const Navbar = () => {
    const [navListDisplay, setNavListDisplay] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [activeId, setActiveId] = useState()
    const toggleNavList = () => {
        setDropdown(false)
        setNavListDisplay(!navListDisplay);
    }

    const handleClick = (event, submenu, id) => {
        setActiveId(id)
        if (submenu) {
            if (dropdown) {
                toggleNavList()
            } else {
                event.preventDefault()
                setDropdown(true)
            }
        } else {
            toggleNavList()
        }
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
                        <li className="menuItem" key={index}>
                            <Link
                                className="menu"
                                to={menu.page} 
                                onClick={(event) => handleClick(event, menu.submenu || false, index)}
                            >
                                {menu.title}
                            </Link>
                            {dropdown && menu.submenu && index===activeId &&
                            <ul className="dropdown">
                                {menu.submenu.map((submenuItem, index) => {
                                    return (
                                        <li className="menuItem" key={index}>
                                            <Link
                                                className="menu"
                                                to={submenuItem.page} 
                                                onClick={() => toggleNavList()}
                                            >
                                                {submenuItem.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>}
                        </li>
                    )
                })}
            </ul> 
        </nav> 
    </>);
};

export default Navbar;
