import { NavLink as Link } from 'react-router-dom'
import entete from '../images/entete.png'
import enteteSm from '../images/enteteSm.png'

const Header = () => {
    return (
        <header>
            <Link to='/A2C2'>
                <img src={entete} className='entete' alt='en-tête' />
                <img src={enteteSm} className='entete-small' alt='en-tête' />
            </Link>
        </header>
    )
}

export default Header
