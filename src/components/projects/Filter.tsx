import { motion } from "framer-motion";
import { useEffect } from "react";
import { FC } from "react";
import type { Project } from "../../types/index";

interface FilterProps {
	projects: Project[];
	activeTag: string;
	setFiltered: React.Dispatch<React.SetStateAction<Project[]>>;
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
			<motion.button
				whileHover={{ rotate: [0, -40, 5] }}
				transition={{ duration: 0.2 }}
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
			</motion.button>
			<motion.button
				whileHover={{ rotate: [0, -40, 5] }}
				transition={{ duration: 0.2 }}
				onClick={() => {
					setActiveTag("React");
				}}
				className={activeTag === "React" ? "btn-blue" : "btn-white"}
			>
				React
			</motion.button>
			<motion.button
				whileHover={{ rotate: [0, -40, 5] }}
				transition={{ duration: 0.2 }}
				onClick={() => {
					setActiveTag("JavaScript");
				}}
				className={activeTag === "JavaScript" ? "btn-blue" : "btn-white"}
			>
				JavaScript
			</motion.button>
			<motion.button
				whileHover={{ rotate: [0, -40, 5] }}
				transition={{ duration: 0.2 }}
				onClick={() => {
					setActiveTag("Rails");
				}}
				className={activeTag === "Rails" ? "btn-blue" : "btn-white"}
			>
				Ruby On Rails
			</motion.button>
		</div>
	);
};

export default Filter;
