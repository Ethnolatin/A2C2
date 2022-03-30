import React, { useState } from "react"

const ContactForm = () => {
	const [status, setStatus] = useState("Envoyer")
	const [formSent, setFormSent] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus("C'est partiiii !")
		const { name, email, workshop, message } = e.target.elements
		let data = {
			name: name.value,
			email: email.value,
			workshop: workshop.value,
			message: message.value,
		}
		await fetch("http://localhost:5000/contact/", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
		// setStatus("Envoyer")
		// let result = await response.json()
		// alert(result.status)
		setFormSent(true)
	}
	return (
		formSent ?
			<p><strong>Le message a bien été transmis. Merci !</strong></p>
			: <form onSubmit={handleSubmit}>
				<label>
					<p className="labelText">Nom</p> 
					<input type="text" name="name" required />
				</label>
				<label>
					<p className="labelText">e-mail</p> 
					<input type="email" name="email" required />
				</label>
				<label>
					<p className="labelText">Atelier</p> 
					<select name="workshop" required>
						<option value="">-- choisissez --</option>
						<option value="Architecture">Architecture</option>
						<option value="Aventure">Aventure</option>
						<option value="Couture">Couture</option>
						<option value="Comédie">Comédie</option>
					</select>
				</label>
				<label>
					<p className="labelText">Message</p> 
					<textarea name="message" required />
				</label>
				<button type="submit" className="sendButton">{status}</button>
				<p className="labelText"><em><strong>Note :</strong> tous les champs sont requis.</em></p> 
			</form>
	)
}

export default ContactForm