const Technologies = () => {
	const technologies = [
		"Ruby",
		"Ruby On Rails",
		"JavaScript ES6",
		"React",
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
	const technologiesList = technologies.map((technology) => {
		return (
			<li key={technology} className="mt-0">
				{technology}
			</li>
		);
	});
	const courses = [
		"Complete Intro to Web Development by Brian Holt",
		"Getting Started with CSS by Jen Kramer",
		"CSS Grid & Flexbox for Responsive Layout by Jen Kramer",
		"Getting Started with JS by Kyle Simpson",
		"Introduction to ES6+ by Dylan Israel",
		"Complete Intro to React by Brian Holt",
		"Intermediate React by Brian Holt",
	];
	const coursesList = courses.map((course) => {
		return <li key={course}>{course}</li>;
	});
	return (
		<div className="mt-4 prose lg:prose-xl dark:prose-invert">
			<h2 className="underline lg:ml-8">Technologies</h2>
			<ul className="pl-0 grid gap-0 grid-cols-2 lg:grid-cols-3">
				{technologiesList}
			</ul>
			<h2 className="underline lg:ml-8">Courses</h2>
			<ul className="pl-0">{coursesList}</ul>
		</div>
	);
};

export default Technologies;
