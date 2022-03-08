import { useEffect } from "react";

const Filter = (props) => {
	const { projects, activeTag, setFiltered, setActiveTag } = props;

	useEffect(() => {
		if (activeTag === "") {
			setFiltered(projects);
			return;
		}

		const filtered = projects.filter((project) =>
			project.tags.includes(activeTag)
		);
		setFiltered(filtered);
	}, [activeTag]);

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
					activeTag === "" ? "btn-blue mt-2 ml-2 lg:ml-0" : "btn-white"
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
