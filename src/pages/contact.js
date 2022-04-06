import ContactForm from '../components/ContactForm'


const Contact = () => {
    return (
        <main>
            <h1>Un avis, une animation sur-mesure, un évènement à construire ensemble&nbsp;? Contactez-moi !</h1>
            <hr />
            <div className="centeredColumn">
                <p className="centeredText">Merci de m'indiquer à propos de quel atelier vous souhaitez échanger.<br/>Je vous répondrai dans les meilleurs délais.</p>
                <ContactForm />
            </div>
            <hr />
        </main>
    )
}

export default Contact