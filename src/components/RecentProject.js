const RecentProject = () => {
	return (
		<section className="rounded-lg shadow-lg grid grid-cols-1 xl:grid-cols-2 gap-0 animate-appear3 bg-black">
			<img
				src={require("../images/kinoko.jpg")}
				alt="Kinoko. Productivity. For what you love. Most recent project homepage"
				className="w-full h-full rounded-t-lg xl:rounded-l-lg xl:rounded-r-none animate-appear3"
			/>
			<article className="project-info py-6 px-8 flex align-center flex-col w-full animate-appear4">
				<h2>
					<a
						href="https://www.kinoko.app/"
						className="underline hover:no-underline"
					>
						Kinoko
					</a>
				</h2>
				<p className="text-flowerblue-50">
					A timeboxing web application that allows you to work for long periods
					of time without getting distracted or burning out. Has time logging
					and a mushroom forest.
				</p>
				<ul className="ml-4 mt-2 text-flowerblue-50">
					<li>Built on Ruby on Rails 6</li>
					<li>Currently being reworked to use React and Tailwind CSS</li>
				</ul>
			</article>
		</section>
	);
};

export default RecentProject;
