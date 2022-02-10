import RecentProject from "../components/RecentProject";

const HomePage = () => {
	return (
		<>
			<div className="home-top animate-appear">
				<h1 className="text-black dark:text-flowerblue-50">
					Diego's Portfolio
				</h1>
				<h3>
					<span className="text-flowerblue-800 dark:text-flowerblue-600">
						Fullstack Developer
					</span>
				</h3>
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
