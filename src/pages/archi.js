import archi2 from '../images/archi2.png'
import carte1 from '../images/carte1.jpg'
import carte1_thumbnail from '../images/carte1_thumbnail.jpg'
import carte2 from '../images/carte2.jpg'
import carte2_thumbnail from '../images/carte2_thumbnail.jpg'
import archi_diplomee from '../images/archi_diplomee.jpg'
import { NavLink as Link } from "react-router-dom"
import { SRLWrapper } from "simple-react-lightbox"
import { letters } from "../components/imagesManagement"

const Archi = () => {
    return (
        <main>
            <h1>Archi-Animatrice / Ateliers d'Architecture</h1>
            <hr />
            <div className="container">
                <div className="logos-title">
                    <img src={archi2} className="logo" alt="logo architecture" />
                    <strong>Espace de bien-être : CHEZ VOUS</strong>
                </div>
                <div>
                    <h2>Pratiquer & transmettre autrement</h2>
                    <p>Suite à mon expérience d'architecte / maître d’œuvre salariée en agence, je souhaite aujourd'hui <strong>partager</strong> ma boite à outils d'architecte de manière <strong>créative et ludique</strong> pour tous (enfants, adolescents, adultes & famille) au sein de structures variées locales : particuliers, associatifs, scolaires, collectivités et privés ...</p>
                    <br />
                    <p><strong>Les objectifs des ateliers d'architecture</strong> sont de :
                    </p>
                    <ul>
                        <li><strong>Prendre conscience</strong> de votre environnement & patrimoine.</li>
                        <li><strong>Être capable de lire, de comprendre</strong> vos espaces.
                        </li>
                        <li><strong>Analyser et répondre</strong> à vos véritables usages.</li>
                        <li><strong>Devenir acteurs</strong> de vos espaces de vie par l'expérimentation.</li>
                        <li><strong>Être conscient</strong> des enjeux de l'avenir de notre territoire.</li>
                        <li><strong>Consommer responsable</strong> en cohérence avec vos projets et valeurs de vie.</li>
                        <li><strong>Découvrir l'envers du décor</strong> dans l'acte de concevoir & bâtir.</li>
                    </ul>
                </div>
                <div>
                    <SRLWrapper>
                        <div className="maps">
                            <div className="map">
                                <a href={carte1}>
                                    <img src={carte1_thumbnail} alt="Territoire d'intervention" />
                                </a>
                                <p className="legend">Le territoire d'intervention&nbsp;: Côte Basque - Labourd - Basse Navarre</p>
                            </div>
                            <div className="map">
                                <a href={carte2}>
                                    <img src={carte2_thumbnail} alt="Possibilité d'intervention" />
                                </a>
                                <p className="legend">Possibilité d'intervention sur la façade Atlantique du Pays Basque à la Gironde (64/40/33)</p>
                            </div>
                        </div>
                    </SRLWrapper>
                </div>
            </div>
            <div className="container text-center">
                <div className="linkContainer">
                    <Link
                        className="linkButton"
                        to="/archi/jeune-public"
                    >
                        Atelier d'expérimentation à l'Architecture
                    </Link>
                    <p>Atelier participatif sur l'Architecture & Urbanisme.
                        <br/>A partir de 6 ans. En partenariat avec l'
                        <a
                            href="https://lesptitsarchis.fr"
                            className="extLink"
                            target="_blank"
                            rel="noreferrer"
                        >
                            atelier des P'tits archis®
                        </a>
                    </p>
                </div>
                <div className="linkContainer">
                    <Link
                        className="linkButton"
                        to="/archi/adultes"
                    >
                        Atelier d'optimisation en Architecture
                    </Link>
                    <p>Atelier participatif sur vos espaces de vie.<br/>Pour adultes.</p>
                </div>
            </div>
            <small className="centeredText"><em>Pour les particuliers, le règlement des ateliers se fait le jour de l'atelier à Marie Bourquin directement et uniquement par chèque ou espèces.<br/>Pour les structures ou organisations, le règlement des ateliers peut se faire par virement, à la réception de la facture.</em></small>
            <hr />
            <h2>Je suis archi-passée par ici :</h2>
            <div className="container">
                <SRLWrapper>
                    <div className="lettersContainer">
                        {letters.map(letter => {
                            return (
                                <a
                                    href={letter.name}
                                    key={letters.indexOf(letter)} 
                                >
                                    <img src={letter.thumbnail} alt="Lettre de recommendation" className="letter" />
                                </a>
                            )
                        })}
                    </div>
                </SRLWrapper>
            </div>
            <hr />
            <h2>Dans l'épisode précédent, je pratiquais l'Architecture de manière conventionnelle</h2>
            <div className="container">
                <div className="logos-title">
                    <img src={archi_diplomee} className="logo" alt="architecte diplômée" />
                </div>
                <div className="linkContainer">
                    <p>Cette première casquette d'Architecte est le socle de ma boîte à outils. Vous retrouverez ce parcours ici&nbsp;:</p>
                    <Link
                        className="linkButton"
                        to="/archi/parcours"
                        target="_blank"
                    >
                        Parcours d'Architecte
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Archi