import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
	const projects = props.projects;
	const { projectId } = useParams();
	const project = projects.find(({ id }) => id === projectId);
	const { title, subtitle, image_path, tags, github, visit } = project;
	const tagsList = tags.map((tag) => {
		return <li key={tag}>{tag}</li>;
	});

	return (
		<div className="grid grid-cols 1 lg:grid-cols-2 shadow-xl rounded-xl">
			<div className="flex flex-col justify-center ml-10">
				<h2>{title}</h2>
				<h3>{subtitle}</h3>
				<div className="flex justify-start">
					<a href={visit} className="btn-project-visit">
						Live Preview
					</a>
					<a href={github} className="btn-project-github">
						Github
					</a>
				</div>
				<ul>{tagsList}</ul>
			</div>
			<div>
				<img
					src={require("../images/" + image_path + ".jpg")}
					alt={title + ". " + subtitle}
					className="h-full w-full animate-appear2 shadow-lg rounded-lg xl:rounded-lg aspect-2"
				/>
			</div>
		</div>
	);
};

export default ProjectDetails;
