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
		<>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
			<img
				src={require("../images/" + image_path + ".jpg")}
				alt={title + ". " + subtitle}
				className="h-full w-full animate-appear2 shadow-lg rounded-lg xl:rounded-lg aspect-2"
			/>
			<a href={visit}>Visit</a>
			<a href={github}>Github</a>
			<ul>{tagsList}</ul>
		</>
	);
};

export default ProjectDetails;