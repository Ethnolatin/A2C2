import { NavLink as Link } from 'react-router-dom'

const Dropdown = ({ submenus, toggleNavList }) => {
    return (
        <ul className='dropdown'>
            {submenus.map((submenu, index) => {
                return (
                    <li className='menuItem' key={index}>
                        <Link
                            className='menu'
                            to={submenu.page} 
                            onClick={() => toggleNavList()}
                        >
                            {submenu.title}
                        </Link>
                        
                    </li>
                )
            })}
        </ul>
    )
}

export default Dropdown
