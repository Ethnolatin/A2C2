import archi2 from '../images/archi2.png';
import carte1 from '../images/carte1.jpg';
import carte1_thumbnail from '../images/carte1_thumbnail.jpg';
import carte2 from '../images/carte2.jpg';
import carte2_thumbnail from '../images/carte2_thumbnail.jpg';
import { SRLWrapper } from "simple-react-lightbox";

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
                    <div>
                        <h2>Pratiquer & transmettre autrement :</h2>
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

        </main>
    )
}

export default Archi