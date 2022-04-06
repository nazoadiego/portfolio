import Kinoko from "../components/Kinoko";
import ContactIcons from "../components/contact/ContactIcons";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FC } from "react";
import Contact from "../components/contact/Contact";
import TechnologiesGrid from "../components/TechnologiesGrid";
import RecentProject from "../components/projects/RecentProject";

const HomePage: FC = () => {
	return (
		<div className="lg:px-12 space-y-8">
			<div className="animate-appear flex flex-col lg:flex-row py-12">
				<Canvas className="canvas">
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} />
					<Suspense fallback={null}>
						<Kinoko></Kinoko>
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
			<article>
				<h3>Work</h3>
				<p>
					Client focused web developer who is very passionate about programming,
					learning new languages and literature. Always looking for easy, fast
					and secure solutions for complex problems. A JAMStack and Ruby On
					Rails enthusiast!
				</p>
			</article>
			<article>
				<h3>My Links</h3>
				<div className="flex flex-wrap">
					<ContactIcons />
				</div>
			</article>
			<article>
				<h3>My Skills</h3>
				<p>
					I have a strong background in web development and I'm always looking
					for new opportunities to learn and improve my skills. I'm a
					self-taught developer with a strong background in Ruby on Rails and
					JavaScript.
				</p>
				<TechnologiesGrid />
			</article>
			<RecentProject />
			<Contact />
		</div>
	);
};

export default HomePage;
