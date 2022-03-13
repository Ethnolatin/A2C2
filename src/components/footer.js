import { NavLink as Link } from "react-router-dom";
import oa from '../images/oa.png';


const Footer = () => {
    const footerLinks = [
        { page: "/archi", title: "Architecte\nMaître d'oeuvre"},
        { page: "/aventure", title: "Aventurière"},
        { page: "/couture", title: "Couturière"},
        { page: "/comedie", title: "Comédienne"},  
    ]
    return (
        <footer className="container">
            <div className="textContainer">
            <a href="https://annuaire.architectes.org/?region_slug=national"
                target="_blank"
                rel="noreferrer"
            >
                <img src={oa} className="logo" alt="logo ordre des architectes" />
            </a>
            <p>
                Inscrite au tableau n°2&nbsp;: n°089893 <br />
                Autre activité liée à l'architecture à titre individuel&nbsp;: création et animation d'ateliers créatifs pluridisciplinaires en lien avec l'architecture.
            </p>
            </div>
            <div className="footerLinksContainer">
                <h2>Informations complémentaires sur mes parcours de&nbsp;:</h2>
                <div className="footerLinks">
                    {footerLinks.map(footerLink => {
                        return (
                            <Link
                                key={footerLinks.indexOf(footerLink)} 
                                className="linkButton linkButton__footer"
                                to={footerLink.page} 
                            >
                                {footerLink.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </footer>
        
    )
}
export default Footer