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
		<div className="grid grid-cols 1 lg:grid-cols-2">
			<div className="flex flex-col justify-center">
				<h5 className="uppercase font-thin">{subtitle}</h5>
				<h2>{title}</h2>
				<div className="flex justify-start">
					<a href={visit} className="btn-project-visit mr-2">
						Live Preview
					</a>
					<a href={github} className="btn-project-github">
						Github
					</a>
				</div>
			</div>
			<div>
				<h3>Tecnologies</h3>
				<ul className="ml-5 grid grid-cols-2">{tagsList}</ul>
			</div>
			<div>
				<h3>Screenshots</h3>
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
