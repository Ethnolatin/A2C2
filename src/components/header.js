import { NavLink as Link } from "react-router-dom";
import entete from '../images/entete.png';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={entete} className="entete" alt="en-tête" />
            </Link>
        </header>
    )
}

export default Header
