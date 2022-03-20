import { useEffect } from "react";
import { FC } from "react";

type Project = {
	id: string;
	title: string;
	tags: string[];
	technologies: string[];
	image_path: string;
	subtitle: string;
	github: string;
	visit: string;
	overview: string;
	difficulties: string;
	solutions: string;
};

interface FilterProps {
	projects: Project[];
	activeTag: string;
	setFiltered: React.Dispatch<
		React.SetStateAction<
			{
				id: string;
				title: string;
				tags: string[];
				technologies: string[];
				image_path: string;
				subtitle: string;
				github: string;
				visit: string;
				overview: string;
				difficulties: string;
				solutions: string;
			}[]
		>
	>;
	setActiveTag: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<FilterProps> = (props) => {
	const { projects, activeTag, setFiltered, setActiveTag } = props;

	useEffect(() => {
		if (activeTag === "") {
			setFiltered(projects);
			return;
		}

		const filtered: Project[] = projects.filter((project) =>
			project.tags.includes(activeTag)
		);
		setFiltered(filtered);
	}, [activeTag, projects, setFiltered]);

	return (
		<div
			className="flex items-center space-y-2 space-x-2
    sm:justify-start flex-wrap lg:space-x-2"
		>
			<button
				onClick={() => {
					setActiveTag("");
				}}
				className={
					activeTag === ""
						? "btn-blue mt-2 ml-2 lg:ml-0"
						: "btn-white mt-2 ml-2 lg:ml-0"
				}
			>
				All
			</button>
			<button
				onClick={() => {
					setActiveTag("React");
				}}
				className={activeTag === "React" ? "btn-blue" : "btn-white"}
			>
				React
			</button>
			<button
				onClick={() => {
					setActiveTag("JavaScript");
				}}
				className={activeTag === "JavaScript" ? "btn-blue" : "btn-white"}
			>
				JavaScript
			</button>
			<button
				onClick={() => {
					setActiveTag("Rails");
				}}
				className={activeTag === "Rails" ? "btn-blue" : "btn-white"}
			>
				Ruby On Rails
			</button>
		</div>
	);
};

export default Filter;
