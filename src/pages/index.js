import archi from '../images/archi.png';
import aventure from '../images/aventure.png';
import couture from '../images/couture.png';
import comedie from '../images/comedie.png';
import presentation1_thumbnail from '../images/presentation1_thumbnail.jpg';
import presentation2_thumbnail from '../images/presentation2_thumbnail.jpg';
import cv_thumbnail from '../images/cv_thumbnail.jpg';
import demarche_thumbnail from '../images/demarche_thumbnail.jpg';
import presentation1 from '../images/presentation1.jpg';
import presentation2 from '../images/presentation2.jpg';
import cv from '../images/cv.jpg';
import demarche from '../images/demarche.jpg';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { NavLink as Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";


const Home = () => {
    return (
        <main className="home">
            <h1 className="h2">La boîte à outils d'A²C² :</h1>
            <div className="container">
                <div className="logosContainer">
                    <div className="logos">
                        <img src={archi} className="logo" alt="logo architecture" />
                        <img src={couture} className="logo" alt="logo couture" />
                    </div>
                    <div className="logos">
                        <img src={aventure} className="logo" alt="logo aventure" />
                        <img src={comedie} className="logo" alt="logo comedie" />
                    </div>
                </div>
                <div className="textContainer">
                    <p>
                        <strong>L'Atelier nomade d'A²C²</strong> est la création et l'animation de séances <strong>créatives & pluridisciplinaires</strong>, fondées sur les savoirs de ma boite à outils : d'<strong>Archi-animatrice</strong> / d'<strong>Aventurière</strong> / de <strong>Comédienne</strong> / de <strong>Couturière</strong>.
                    </p>
                    <p>
                        Je souhaite répondre à mon objectif fixé à mes 10 ans : <strong>créer des espaces où les gens se sentent bien</strong>. Ajoutez-y à mon objectif de la trentaine : <strong>vous rendre acteur & autonome de votre bien-être</strong> :
                    </p>
                    <p>
                        <strong>Chez vous</strong> / avec mes outils d’Architecte - diplômée depuis 2015.<br/>
                        <strong>Sur vous</strong> / avec mes outils de Couturière - autodidacte depuis 2009.<br/>
                        <strong>En vous</strong> / avec mes outils d’Aventurière - depuis 2013 & de Comédienne - depuis 1998.
                    </p>
                    <p>
                        Ce projet professionnel de <strong>"pratiquer l’architecture autrement"</strong> se traduit sous des formes diverses toujours <strong>participatives et sur-mesure</strong>.
                    </p>
                    <p>
                        Bonne découverte.
                    </p>
                    <p className="signature">
                        Avec détermination & singularité<br/>
                        <strong>Marie Bourquin / Slasheuse de l'Atelier A²C²</strong>
                    </p>
                </div>
            </div>
            <hr />
            <div className="socialNetworksContainer">
                <h2>
                    Retrouvez mon actualité en direct sur les réseaux sociaux :
                </h2>
                <div className="socialNetworksIcons">
                    <a href="https://www.facebook.com/Slasheuse-A²C²-108214664767968" target="_blank" rel="noreferrer">
                        <FaFacebookSquare className="socialNetworkLink" />
                    </a>
                    <a href="https://www.linkedin.com/company/slasheuse-a%C2%B2c%C2%B2/?viewAsMember=true" target="_blank" rel="noreferrer">
                        <FaLinkedin className="socialNetworkLink" />
                    </a>
                    <a href="https://www.instagram.com/ateliera2c2" target="_blank" rel="noreferrer">
                        <FaInstagramSquare className="socialNetworkLink" />
                    </a>
                </div>
            </div>
            <hr />
            <SRLWrapper>
                <div className="docsContainer">
                    <div className="doc">
                        <h3>Brochure de présentation</h3>
                        <a href={presentation1}>
                            <img src={presentation1_thumbnail} alt="Brochure de présentation recto" />
                        </a>
                        <a href={presentation2}>
                            <img src={presentation2_thumbnail} alt="Brochure de présentation verso" />
                        </a>
                    </div>
                    <div className="doc">
                        <h3>CV de l'Atelier A²C²</h3>
                        <a href={cv}>
                            <img src={cv_thumbnail} alt="CV de l'Atelier A²C²" />
                        </a>
                    </div>
                    <div className="doc">
                        <h3>Démarche de l'Atelier A²C²</h3>
                        <a href={demarche}>
                            <img src={demarche_thumbnail} alt="Démarche de l'Atelier A²C²" />
                        </a>
                    </div>
                </div>
            </SRLWrapper>
            <hr />
            <div className="container">
                <Link
                    className="linkButton"
                    to="/contact"
                    target="_blank"
                >
                    Pour toute demande, contactez-moi
                </Link>
            </div>
        </main>
    )
}

export default Home