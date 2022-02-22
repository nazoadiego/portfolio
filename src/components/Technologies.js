const Technologies = () => {
	const technologies = [
		"Ruby",
		"Ruby On Rails",
		"JavaScript ES6",
		"React",
		"Redux",
		"TypeScript",
		"HTML5",
		"CSS3",
		"Sass",
		"TailwindCSS",
		"Bootstrap",
		"SQL",
		"Webpack",
		"Parcel",
		"Git",
		"GitHub",
		"Heroku",
		"Figma",
	];

	return (
		<>
			<h2 className="underline lg:ml-8">Technologies</h2>
			<ul className="pl-0 grid gap-0 grid-cols-2 lg:grid-cols-3">
				{technologies.map((technology) => {
					return (
						<li key={technology} className="mt-0">
							{technology}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Technologies;
