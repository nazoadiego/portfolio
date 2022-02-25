import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [result, setResult] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ekc86h8",
				"template_9br42vb",
				form.current,
				"user_SCWIx9ULODUFZodDiR0bl"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setResult(true);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className="flex flex-col">
			<label>Name</label>
			<input type="text" name="from_name" />
			<label>Email</label>
			<input type="email" name="email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" className="btn-blue mt-4 w-1/3" />
			{result && <h6>Your message has been sent. I will contact you soon.</h6>}
		</form>
	);
};

export default Contact;
