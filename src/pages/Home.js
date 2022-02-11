import RecentProject from "../components/RecentProject";
import Kinoko from "../components/Kinoko";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const HomePage = () => {
	return (
		<>
			<div className="">
				<div className="home-top animate-appear flex flex-col lg:flex-row">
					<Canvas clasName="canvas">
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} />
						<Suspense fallback={null}>
							<Kinoko></Kinoko>
						</Suspense>
					</Canvas>
					<div className="flex flex-col mr-48 w-full justify-center mt-10 lg:text-right">
						<h1 className="text-black dark:text-flowerblue-50">
							Diego's Portfolio
						</h1>
						<h3>
							<span className="text-flowerblue-800 dark:text-flowerblue-600">
								Fullstack Developer
							</span>
						</h3>
					</div>
				</div>
			</div>
			<div className="home-bottom mt-8">
				<h2 className="animate-appear2 text-black dark:text-flowerblue-50">
					Most recent project
				</h2>
				<RecentProject />
			</div>
		</>
	);
};

export default HomePage;
