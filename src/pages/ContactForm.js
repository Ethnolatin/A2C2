import React, { useState } from "react"

const ContactForm = () => {
	const [status, setStatus] = useState("Envoyer")

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus("Envoi en cours...")
		const { name, email, workshop, message } = e.target.elements
		let data = {
			name: name.value,
			email: email.value,
			workshop: workshop.value,
			message: message.value,
		}
		let response = await fetch("http://localhost:5000/contact/", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
		setStatus("Envoyer")
		let result = await response.json()
		alert(result.status)
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Nom 
				<input type="text" name="name" required />
			</label>
			<label>
				e-mail
				<input type="email" name="email" required />
			</label>
			<label>
				Atelier
				<select name="workshop" required>
					<option value="archi">Architecture</option>
					<option value="aventure">Aventure</option>
					<option value="couture">Couture</option>
					<option value="comedie">Comédie</option>
				</select>
			</label>
			<label>
				Message
				<textarea name="message" required />
			</label>
			<button type="submit">{status}</button>
		</form>
	)
}

export default ContactForm