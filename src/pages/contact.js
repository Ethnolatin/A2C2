import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <main>
            <h1>Un avis, une animation sur-mesure, un évènement à construire ensemble, contactez-moi</h1>
            <hr />
            <div className="centeredColumn">
                <p className="centeredText">Merci de m'indiquer sur quel atelier vous souhaitez échanger : Architecture / Aventure / Couture / Comédie.<br/>Je vous répondrai dans les meilleurs délais.</p>
                <ContactForm />
            </div>
        </main>
    )
}

export default Contact