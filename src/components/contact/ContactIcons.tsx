import { FC } from "react";
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactIcons: FC = () => {
	return (
		<>
			<a href="https://github.com/nazoadiego">
				<div className="about-card animate-appear4 bg-flowerblue-900 py-[10px]">
					<h3>
						<FaGithub />
					</h3>
				</div>
			</a>

			<a href="https://linkedin.com/in/nazoa-diego/">
				<div className="about-card animate-appear4 bg-flowerblue-800 py-[10px]">
					<h3>
						<FaLinkedinIn />
					</h3>
				</div>
			</a>

			<div className="about-card animate-appear4 bg-flowerblue-700 py-[10px]">
				<h3>
					<a href="#contact">
						<FaEnvelope />
					</a>
				</h3>
			</div>

			<a href="https://twitter.com/nzoadiego/">
				<div className="about-card animate-appear4 bg-flowerblue-600 py-[10px]">
					<h3>
						<FaTwitter />
					</h3>
				</div>
			</a>
		</>
	);
};

export default ContactIcons;
