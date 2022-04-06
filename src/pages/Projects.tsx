import { FC } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Components
import CardProject from "../components/projects/CardProject";
import ProjectDetails from "./ProjectDetails";
// Content
import projects from "../content/ProjectsInfo";
import Filter from "../components/projects/Filter";

const ProjectsPage: FC = () => {
	const [filtered, setFiltered] = useState(projects);
	const [activeTag, setActiveTag] = useState("");

	let { path, url }: { path: string; url: string } = useRouteMatch();

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
					<ProjectDetails />
				</Route>
			</Switch>
		</>
	);
};

export default ProjectsPage;
