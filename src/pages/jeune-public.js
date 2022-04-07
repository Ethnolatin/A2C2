import ptitsarchis from '../images/ptitsarchis.jpg'
import archi2 from '../images/archi2.png'


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

        </main>
    )
}

export default JeunePublic