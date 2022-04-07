import { NavLink as Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { AiFillDownSquare } from 'react-icons/ai'


const MenuItemDisplay = ({ index, dropdown, item, activeId, handleClick, toggleNavList }) => {
    return (
        <li className='menuItem' key={index}>
            <Link
                className='menu'
                to={item.page} 
                onClick={(event) => handleClick(event, item.submenu || false, index)}
            >
                {item.title}{item.submenu && ((dropdown && index!==activeId) || !dropdown) && <AiFillDownSquare /> }
            </Link>
            {dropdown && item.submenu && index===activeId &&
                <Dropdown submenus={item.submenu} toggleNavList={toggleNavList} />
            }
        </li>
    )
}

export default MenuItemDisplay