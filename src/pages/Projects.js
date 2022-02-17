import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import CardProject from "../components/CardProject";
import ProjectDetails from "./ProjectDetails";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = () => {
	const projects = [
		{
			id: "kinoko",
			title: "Kinoko",
			subtitle: "Pomodoro App",
			tags: ["Rails", "JavaScript"],
			technologies: [
				"HTML5",
				"CSS3",
				"Ruby",
				"Ruby On Rails",
				"JavaScript ES6",
				"Webpack",
				"PostgreSQL",
				"SASS",
				"Tailwind CSS",
				"AnimeJS",
				"Heroku",
			],
			image_path: "kinoko",
			github: "https://github.com/nazoadiego/Kinoko",
			visit: "https://www.kinoko.app/",
			overview: `A productivity web application based on the popular pomodoro
      study method. It allows you to set a timer where you alternate between
      work time and break time. The app keeps track of your hours of work and
      can display it both as statistics and as a mysterious mushroom (kinoko) forest.`,
			difficulties: `There were two main difficulties with this project. The first
      one was that this project was very ambitious with the relationships in our
      database. The second one was that I wanted a very minimalist design, which
      always comes with the risk of it being plain instead of minimalist. Both
      were very humbling problems to have.`,
			solutions: `When we realized how complex it was what we were trying to do
      with the database, I decided to take a step back with my team and really
      think and talk through it. In the end, it was a mix of both finding more
      simple and better solutions, as well as compromising to deliver a complete
      and fully working product. Even if it didn't have all the features we wanted.
      For the minimalist designing, sketching it out on Figma was fundamental.
      `,
		},
		{
			id: "bookanartist",
			title: "BookAnArtist",
			subtitle: "Artist Booking",
			tags: ["Rails", "JavaScript"],
			technologies: [
				"HTML5",
				"CSS3",
				"Ruby",
				"Ruby On Rails",
				"JavaScript ES6",
				"Webpack",
				"PostgreSQL",
				"Sass",
				"Tailwind CSS",
				"Heroku",
			],
			image_path: "bookanartist",
			github: "https://github.com/nazoadiego/BookAnArtist",
			visit: "https://bookanartist.herokuapp.com/",
			overview:
				"A Ruby on Rails website for booking artists. Loosely based on Airbnb.",
			difficulties: `First time coding with a team, first time leading a project
      and my first real project. There was definitely a learning curve when it came
      to using Rails, doing version control, and deployment on Heroku. Later on,
      after the bootcamp I decided to change Bootstrap to Tailwind which, of course,
      breaks everything`,
			solutions: `A solution I came up with that helped was creating a
      kanban todo list. It helped a lot when I had to delegate work and to keep
      track of our progress and the most important features. And for version control
      it was very important that we had good communication and deadlines to put
      the work we had been doing together with Git/Github. Going from Bootstrap
      to Tailwind took a lot of time, but it was simple enough and worth it in
      end.From Bootstrap I learned the benefit of using a framework for CSS. Namely, that it
      gave structure and uniformity when working together. From Tailwind I learned
      about the importance of writing scalable and easier to customize CSS, while
      keeping the advantages of using an utility first framework.`,
		},
		{
			id: "kinoko-crush",
			title: "Kinoko Crush",
			tags: ["JavaScript"],
			technologies: ["HTML5", "CSS3", "JavaScript ES6"],
			image_path: "kinoko-crush",
			subtitle: "Candy Crush Clone",
			github: "https://github.com/nazoadiego/kinoko-crush-js",
			visit: "https://nazoadiego.github.io/kinoko-crush-js/",
			overview: `A Candy Crush clone made in vanilla JavaScript.`,
			difficulties: `A technical challenge to practice the fundamentals of JavaScript.
      But more than technical, it was a challenge of my problem solving skills.
      How did I make the grid? How should program when there is a match? How do
      I account for invalid moves?`,
			solutions: `Had to take a step back and think long and hard about how Candy
      Crush actually works. The patterns under such a deceivingly simple game.
      Very fun challenge to do.`,
		},
		{
			id: "portfolio",
			title: "Portfolio",
			tags: ["JavaScript", "React"],
			technologies: ["JavaScript ES6", "React", "Webpack", "Three.js"],
			image_path: "portfolio",
			subtitle: "Personal Portfolio",
			github: "https://github.com/nazoadiego/portfolio",
			visit: "https://nazoadiego.github.io/portfolio/",
			overview: `The place where I display my work. Originally it was a Ruby on
      Rails app, but I decided to redo it as a single page application. Lots of
      first: first website using Tailwind CSS, first React App, and first page
      where I used 3D animation with Three.js.`,
			difficulties: `In theory, I understood how routing worked in React. In
      practice. However, I realized I didn't understood as well as I thought, and
      that nested rooting required a little more work to function correctly.`,
			solutions: `Had to do lots of trying and error to understand how React
      really works. Got my hands dirty a few hours investigating (courses, Stack Overflow,
      React and React Router docs) and came back with a more clear understanding
      of how to fix it.`,
		},
	];
	const [filtered, setFiltered] = useState(projects);
	const [activeTag, setActiveTag] = useState("");

	let { path, url } = useRouteMatch();

	return (
		<>
			<Switch>
				<Route exact path={path}>
					<h1 className="underline">Projects</h1>
					<Filter
						projects={projects}
						setFiltered={setFiltered}
						activeTag={activeTag}
						setActiveTag={setActiveTag}
					/>
					<motion.div
						layout
						className="grid gap-2 grid-cols-1 lg:grid-cols-2 mt-4"
					>
						<AnimatePresence>
							{filtered.map((project) => {
								return (
									<Link key={project.id} to={`${url}/${project.id}`}>
										<CardProject
											title={project.title}
											subtitle={project.subtitle}
											image_path={project.image_path}
										/>
									</Link>
								);
							})}
						</AnimatePresence>
					</motion.div>
				</Route>
				<Route path={`${path}/:projectId`}>
					<ProjectDetails projects={projects} />
				</Route>
			</Switch>
		</>
	);
};

export default ProjectsPage;
