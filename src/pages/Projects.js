import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import CardProject from "../components/CardProject";
import ProjectDetails from "./ProjectDetails";

const ProjectsPage = () => {
	const projects = [
		{
			id: "kinoko",
			title: "Kinoko",
			subtitle: "Timeboxing App",
			tags: ["Ruby", "React"],
			image_path: "kinoko",
			github: "https://github.com/nazoadiego/Kinoko",
			visit: "https://www.kinoko.app/",
		},
		{
			id: "bookanartist",
			title: "BookAnArtist",
			subtitle: "Concert Booking",
			tags: ["Ruby", "React"],
			image_path: "bookanartist",
			github: "https://github.com/nazoadiego/BookAnArtist",
			visit: "https://bookanartist.herokuapp.com/",
		},
		{
			id: "kinoko-crush",
			title: "Kinoko Crush",
			tags: ["JavaScript"],
			image_path: "kinoko-crush",
			subtitle: "Candy Crush Clone but with Kinokos",
			github: "https://github.com/nazoadiego/kinoko-crush-js",
			visit: "https://nazoadiego.github.io/kinoko-crush-js/",
		},
	];

	let { path, url } = useRouteMatch();

	return (
		<>
			<Switch>
				<Route exact path={path}>
					<h1 className="underline">Projects</h1>

					<div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
						{projects.map((project) => {
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
					</div>
				</Route>
				<Route path={`${path}/:projectId`}>
					<ProjectDetails projects={projects} />
				</Route>
			</Switch>
		</>
	);
};

export default ProjectsPage;
