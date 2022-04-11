import ptitsarchis from '../images/ptitsarchis.jpg'
import archi2 from '../images/archi2.png'
import { SRLWrapper } from 'simple-react-lightbox'
import { processes, approches1, approches2 } from '../components/imagesManagement'


const JeunePublic = () => {
    return (
        <main>
            <h1>Jeune public</h1>
            <hr />
            <h2>Atelier d'expérimentation à l'Architecture & à l'Urbanisme</h2>
            <div className="centeredText">
                <p><strong>« Pour comprendre l’architecture, il faut lever la tête, ouvrir les yeux et devenir réceptif au monde qui nous entoure. »</strong><br />
                L’architecture, Philippe Madec [Ed. Autrement, Col. Autrement Junior, 2004]</p>
            </div>
            <div className="container">
                <div className="logos-title">
                    <a
                        href="https://lesptitsarchis.fr"
                        className="extLink"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={ptitsarchis} className="logo" alt="logo architecture" />
                    </a>
                </div>
                <p>Notre partenariat avec l'
                    <a
                        href="https://lesptitsarchis.fr"
                        className="extLink"
                        target="_blank"
                        rel="noreferrer"
                    >
                        atelier des P'tits archis®
                    </a> renforce nos valeurs communes telles que <strong>la transmission, l’authenticité, la solidarité et la bienveillance</strong>. Notre philosophie est de <strong>partager notre culture architecturale</strong> et nos <strong>outils de compréhension</strong> au public afin qu’il explore le monde. Notre <strong>boite à outils d'architecte</strong> est au service du devenir de ces <strong>futurs acteurs, responsables et conscients de leurs environnements</strong>.
                </p>
                <div className="logos-title">
                    <img src={archi2} className="logo" alt="logo architecture" />
                </div>
            </div>
            <hr />
            <h2>Process d'intervention</h2>
            <SRLWrapper>
                <div className="container">
                    {processes.map(process => {
                        return (
                            <a
                                href={process.name}
                                key={processes.indexOf(process)} 
                            >
                                <img src={process.thumbnail} alt="Process d'intervention" className="process" />
                            </a>
                        )
                    })}
                </div>
            </SRLWrapper>
            <hr />
            <h2>A quoi cela ressemble ?</h2>
            <div className="centeredColumn">
                <div className="container">
                    <SRLWrapper>
                        <div className="maps">
                            {approches1.map(approche => {
                                return (
                                    <a
                                        href={approche.name}
                                        key={approches1.indexOf(approche)} 
                                    >
                                        <img src={approche.thumbnail} alt="Exemple de réalisation" className="process" />
                                    </a>
                                )
                            })}
                        </div>
                    </SRLWrapper>
                    <div className="centralColumn">
                        <p><strong>Les approches</strong> possibles selon le type de votre structure, les caractéristiques des participants, la durée de l'atelier, les objectifs & valeurs pédagogiques...&nbsp;:
                        </p>
                        <ul>
                            <li><strong>Sensorielle :</strong> appréhender l'espace, la lumière, les volumes, les matériaux, la décoration...</li>
                            <li><strong>Ludique :</strong> supports variés 3D, construire de maquettes cartons, jeux de construction,  animation pour anniversaire.
                            </li>
                            <li><strong>Virtuelle :</strong> dessin de maquettes numériques...</li>
                            <li><strong>Créative :</strong> sur supports variés 2D (dessins, plans, collage, pliage, assemblage,...)...</li>
                            <li><strong>Descriptive</strong> de bâtiments emblématiques ou célèbres, via des livres, films, photos, plans...</li>
                            <li><strong>Historique</strong> de culture architecturale et urbaine...</li>
                            <li><strong>Monographique</strong> des parcours & travaux d'un architecte célèbre et/ou contemporain...</li>
                            <li><strong>Analytique</strong> des espaces (où), des usagers (pour y faire quoi) et des usages (pour qui)...</li>
                            <li><strong>Par exploration</strong> sur le terrain : visite et décryptage de la ville, d'un quartier, d'un bâtiment, d'un chantier...</li>
                            <li><strong>Par le métier :</strong> en quoi consiste le travail de chaque acteurs dans l'acte de construire, quels sont leurs rôles dans le processus de projet ?</li>
                            <li><strong>Par des thèmes</strong> spécifiques : le patrimoine, le développement durable, le vivre-ensemble...</li>
                            <li><strong>A travers une activité</strong> dans un cadre à forte culture patrimoniale : ateliers dans une exploitation viticole, musée...</li>
                            <li>Etc.</li>
                        </ul>
                    </div>
                    <SRLWrapper>
                    <div className="maps">
                            {approches2.map(approche => {
                                return (
                                    <a
                                        href={approche.name}
                                        key={approches2.indexOf(approche)} 
                                    >
                                        <img src={approche.thumbnail} alt="Exemple de réalisation" className="process" />
                                    </a>
                                )
                            })}
                        </div>
                    </SRLWrapper>
                </div>
                <div className="container"></div>
            </div>
        </main>
    )
}

export default JeunePublic