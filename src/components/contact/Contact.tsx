import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FC } from "react";

const Contact: FC = () => {
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
		<div className="flex flex-col items-center">
			<h3 id="contact">Contact</h3>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="flex flex-col w-full xl:w-1/2 "
			>
				<label className="mt-2">Name</label>
				<input
					type="text"
					name="from_name"
					className="day-input dark:dark-input"
				/>
				<label className="mt-2">Email</label>
				<input
					type="email"
					name="email"
					className="day-input dark:dark-input"
				/>
				<label className="mt-2">Message</label>
				<textarea name="message" className="day-input dark:dark-input h-40" />
				<input type="submit" value="Send" className="btn-blue my-4 w-1/3" />
				{result && <h6>Your message has been sent. I'll get in touch soon!</h6>}
			</form>
		</div>
	);
};

export default Contact;
