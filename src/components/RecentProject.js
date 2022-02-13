const RecentProject = () => {
	return (
		<section className="grid animate-appear3 grid-cols-1 gap-0 rounded-lg bg-black shadow-lg xl:grid-cols-2">
			<img
				src={require("../images/kinoko.jpg")}
				alt="Kinoko. Productivity. For what you love. Most recent project homepage"
				className="h-full w-full animate-appear3 rounded-t-lg xl:rounded-l-lg xl:rounded-r-none"
			/>
			<article className="align-center flex w-full animate-appear4 flex-col py-6 px-8 text-gray-200">
				<h2>
					<a
						href="https://www.kinoko.app/"
						className="underline hover:no-underline"
					>
						Kinoko
					</a>
				</h2>
				<p>
					A timeboxing web application that allows you to work for long periods
					of time without getting distracted or burning out. Has time logging
					and a mushroom forest.
				</p>
				<ul className="ml-4 mt-2 ">
					<li>Built on Ruby on Rails 6</li>
					<li>Currently being reworked to use React and Tailwind CSS</li>
				</ul>
			</article>
		</section>
	);
};

export default RecentProject;
