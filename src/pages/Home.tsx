import Kinoko from "../components/Kinoko";
import ContactIcons from "../components/contact/ContactIcons";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FC } from "react";
import Contact from "../components/contact/Contact";
import TechnologiesGrid from "../components/TechnologiesGrid";
import { motion } from "framer-motion";
import projects from "../content/ProjectsInfo";
import CardProjectHome from "../components/projects/CardProjectHome";

const HomePage: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className="lg:px-12 space-y-8"
		>
			<div className="flex flex-col lg:flex-row py-12">
				<Canvas className="canvas">
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} />
					<Suspense fallback={null}>
						<Kinoko />
					</Suspense>
				</Canvas>
				<div className="flex flex-col lg:mr-16 lg:text-right">
					<h1 className="text-black dark:text-flowerblue-50">
						Diego's Portfolio
					</h1>
					<h3>
						<span className="text-flowerblue-500 dark:text-flowerblue-700">
							Web Developer
						</span>
					</h3>
				</div>
			</div>
			<div className="flex justify-center">
				<div
					className="dark:bg-moon-400 bg-flowerblue-200  dark:text-flowerblue-200
        rounded-lg px-6 py-4 flex justify-center items-center"
				>
					<p>Hello, I'm a web developer based in Spain!</p>
				</div>
			</div>
			<article className="space-y-4">
				<h3>Work</h3>
				<p>
					Client focused web developer who is very passionate about programming,
					learning new languages and literature. Always looking for easy, fast
					and secure solutions for complex problems. A JAMStack and Ruby On
					Rails enthusiast!
				</p>
			</article>
			<article className="space-y-4">
				<h3>My Links</h3>
				<div className="flex flex-wrap">
					<ContactIcons />
				</div>
			</article>
			<article className="space-y-8">
				<h3>My Skills</h3>
				<TechnologiesGrid />
			</article>
			<section className="space-y-8">
				{projects.map((project, index) => (
					<CardProjectHome
						key={project.id}
						project={project}
						reversed={index % 2 === 0 ? true : false}
					/>
				))}
			</section>
			<Contact />
		</motion.div>
	);
};

export default HomePage;
