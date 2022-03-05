import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Components
import CardProject from "../components/CardProject";
import ProjectDetails from "./ProjectDetails";
import Filter from "../components/Filter";
// Objects
import projects from "../components/ProjectsObjects";

const ProjectsPage = () => {
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
