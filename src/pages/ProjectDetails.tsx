import { useParams } from "react-router-dom";
import { FC } from "react";
import ImageWithFallback from "../components/ImageWithFallback";
import projects from "../content/ProjectsInfo";

const ProjectDetails: FC = () => {
	const { projectId } = useParams();
	const project = projects.find((project) => project.id === projectId);

	const {
		title,
		subtitle,
		image_path,
		technologies,
		github,
		visit,
		overview,
		difficulties,
		solutions,
	} = project;

	const technologiesList = technologies.map((technology) => {
		return <li key={technology}>{technology}</li>;
	});

	return (
		<div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-2">
			<div className="flex flex-col">
				<h5 className="uppercase font-thin">{subtitle}</h5>
				<h2>{title}</h2>
				<div className="flex">
					<a
						href={visit}
						className="btn-white mr-2"
						target="_blank"
						rel="noreferrer"
					>
						Live Preview
					</a>
					<a
						href={github}
						className="btn-blue"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
				</div>
				<div className="prose-base lg:prose-xl dark:prose-invert mt-4">
					<h3>Project</h3>
					<p>{overview}</p>
					<h3>Project Difficulties</h3>
					<p>{difficulties}</p>
					<h3>My Solution</h3>
					<p>{solutions}</p>
				</div>
			</div>
			<div>
				<ImageWithFallback
					src={require("../images/" + image_path + ".webp")}
					fallback={require("../images/" + image_path + ".jpg")}
					alt={title + ". " + subtitle}
					className="mt-4 shadow-lg rounded-lg xl:rounded-lg
				aspect-2"
				/>
				<div className="prose lg:prose-xl dark:prose-invert mt-8">
					<h3>Technologies</h3>
					<ul className="ml-2 grid grid-cols-2">{technologiesList}</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
