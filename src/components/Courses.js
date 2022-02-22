const Courses = () => {
	const courses = [
		"Full Stack Web Development by Le Wagon",
		"Complete Intro to Web Development by Brian Holt",
		"Getting Started with CSS by Jen Kramer",
		"CSS Grid & Flexbox for Responsive Layout by Jen Kramer",
		"Getting Started with JS by Kyle Simpson",
		"Introduction to ES6+ by Dylan Israel",
		"Complete Intro to React by Brian Holt",
		"Intermediate React by Brian Holt",
	];

	return (
		<>
			<h2 className="underline lg:ml-8">Courses</h2>
			<ul className="pl-0">
				{courses.map((course) => {
					return <li key={course}>{course}</li>;
				})}
			</ul>
		</>
	);
};

export default Courses;
