import React, { useState } from 'react'
import Hamburger from './Hamburger'
import MenuItemDisplay from './MenuItemDisplay'
import { menuItems } from './menuItems'

const Navbar = () => {

    const [navListDisplay, setNavListDisplay] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [activeId, setActiveId] = useState()

    const toggleNavList = () => {
        setDropdown(false)
        setNavListDisplay(!navListDisplay)
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
            <Hamburger
                navListDisplay={navListDisplay}
                toggleNavList={toggleNavList}
            />
            
            <ul className= {`navMenu ${navListDisplay ? 'comesIn' : 'comesOut'}`}>
                {menuItems.map((menu, index) => {
                    return (
                        <MenuItemDisplay
                            key={index}
                            index={index}
                            dropdown={dropdown}
                            item={menu}
                            activeId={activeId}
                            handleClick={handleClick}
                            toggleNavList={toggleNavList}
                        />
                    )
                })}
            </ul> 
        </nav> 
    </>)
}

export default Navbar
