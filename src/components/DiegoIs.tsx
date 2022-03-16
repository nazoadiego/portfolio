import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FC } from "react";

const DiegoIs: FC = () => {
	return (
		<>
			<div>
				<h1>Diego is...</h1>
			</div>
			<div className="mt-2 space-y-1">
				<h3 className="animate-appear">
					A{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						passionate
					</span>{" "}
					web developer
				</h3>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4">
					<div className="about-card animate-appear bg-flowerblue-900">
						<h3>Rails</h3>
					</div>
					<div className="about-card animate-appear bg-flowerblue-800">
						<h3>JavaScript</h3>
					</div>
					<div className="about-card animate-appear bg-flowerblue-700">
						<h3>React</h3>
					</div>
					<div className="about-card animate-appear bg-flowerblue-600">
						<h3>SQL</h3>
					</div>
				</div>
				<h3 className="animate-appear2">
					A fan of{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						good design
					</span>
				</h3>
				<div className="grid grid-cols-2 lg:grid-cols-4">
					<div className="about-card animate-appear2 bg-flowerblue-900">
						<h3>CSS</h3>
					</div>
					<div className="about-card animate-appear2 bg-flowerblue-800">
						<h3>Tailwind</h3>
					</div>
					<div className="about-card animate-appear2 bg-flowerblue-700">
						<h3>Sass</h3>
					</div>
					<div className="about-card animate-appear2 bg-flowerblue-600">
						<h3>Figma</h3>
					</div>
				</div>
				<h3 className="animate-appear3">
					Curious about{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						new technology
					</span>
				</h3>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4">
					<div className="about-card animate-appear3 bg-flowerblue-900">
						<h3>TypeScript</h3>
					</div>
					<div className="about-card animate-appear3 bg-flowerblue-800">
						<h3>Vue</h3>
					</div>
					<div className="about-card animate-appear3 bg-flowerblue-700">
						<h3>NextJS</h3>
					</div>
					<div className="about-card animate-appear3 bg-flowerblue-600">
						<h3>Firebase</h3>
					</div>
				</div>
				<h3 className="animate-appear4">
					Looking for new exciting{" "}
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						opportunities
					</span>
				</h3>
				<div className="grid grid-cols-2 lg:grid-cols-4">
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

					<div className="about-card hasTooltip animate-appear4 bg-flowerblue-700 py-[10px]">
						<h3>
							<FaEnvelope />
						</h3>
						<div className="tooltip">
							<p className="text-base font-bold">dnazoa737@gmail.com</p>
						</div>
					</div>

					<a href="https://twitter.com/nzoadiego/">
						<div className="about-card animate-appear4 bg-flowerblue-600 py-[10px]">
							<h3>
								<FaTwitter />
							</h3>
						</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default DiegoIs;
