import React, { useState } from "react"

const ContactForm = () => {
	const [status, setStatus] = useState("Submit")
	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus("Sending...")
		const { name, email, message } = e.target.elements
		let data = {
			name: name.value,
			email: email.value,
			message: message.value,
		}
		let response = await fetch("http://localhost:5000/contact/", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
		setStatus("Submit")
		let result = await response.json()
		alert(result.status)
	}
	return (
		<form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="name">Nom :</label>
			<input type="text" id="name" required />
		</div>
		<div>
			<label htmlFor="email">E-mail :</label>
			<input type="email" id="email" required />
		</div>
		<div>
			<label htmlFor="message">Message :</label>
			<textarea id="message" required />
		</div>
		<button type="submit">{status}</button>
		</form>
	)
}

export default ContactForm