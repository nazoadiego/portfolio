import { Link } from "react-router-dom";
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = () => {
	return (
		<>
			<div className="about-top">
				<h1>Diego is...</h1>
			</div>
			<div className="home-bottom mt-8">
				<h2 className="animate-appear">
					A{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						fullstack
					</span>{" "}
					web developer
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4">
					<div className="card animate-appear bg-flowerblue-900">
						<h2>Rails</h2>
					</div>
					<div className="card animate-appear bg-flowerblue-800">
						<h2>Ruby</h2>
					</div>
					<div className="card animate-appear bg-flowerblue-700">
						<h2>JavaScript</h2>
					</div>
					<div className="card animate-appear bg-flowerblue-600">
						<h2>SQL</h2>
					</div>
				</div>
				<h2 className="animate-appear2">
					A fan of{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						good design
					</span>
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4">
					<div className="card animate-appear2 bg-flowerblue-900">
						<h2>CSS</h2>
					</div>
					<div className="card animate-appear2 bg-flowerblue-800">
						<h2>Tailwind</h2>
					</div>
					<div className="card animate-appear2 bg-flowerblue-700">
						<h2>Sass</h2>
					</div>
					<div className="card animate-appear2 bg-flowerblue-600">
						<h2>Figma</h2>
					</div>
				</div>
				<h2 className="animate-appear3">
					Curious about{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						new technology
					</span>
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4">
					<div className="card animate-appear3 bg-flowerblue-900">
						<h2>React</h2>
					</div>
					<div className="card animate-appear3 bg-flowerblue-800">
						<h2>Vue</h2>
					</div>
					<div className="card animate-appear3 bg-flowerblue-700">
						<h2>Animejs</h2>
					</div>
					<div className="card animate-appear3 bg-flowerblue-600">
						<h2>Stimulus</h2>
					</div>
				</div>
				<h2 className="animate-appear4">
					Looking for new exciting{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						opportunities
					</span>
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4">
					<a href="https://github.com/nazoadiego">
						<div className="card py-[10px] animate-appear4 bg-flowerblue-900">
							<h2>
								<FaGithub />
							</h2>
						</div>
					</a>

					<a href="https://linkedin.com/in/nazoa-diego/">
						<div className="card py-[10px] animate-appear4 bg-flowerblue-800">
							<h2>
								<FaLinkedinIn />
							</h2>
						</div>
					</a>

					<div className="card py-[10px] animate-appear4 bg-flowerblue-700 hasTooltip">
						<h2>
							<FaEnvelope />
						</h2>
						<div className="tooltip">
							<p className="font-bold text-base">dnazoa737@gmail.com</p>
						</div>
					</div>

					<a href="https://twitter.com/nzoadiego/">
						<div className="card py-[10px] animate-appear4 bg-flowerblue-600">
							<h2>
								<FaTwitter />
							</h2>
						</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default About;