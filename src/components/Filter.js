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
		<div className="space-x-2 flex">
			<button
				onClick={() => {
					setActiveTag("");
				}}
				className={
					activeTag === "" ? "btn-project-github" : "btn-project-visit"
				}
			>
				All
			</button>
			<button
				onClick={() => {
					setActiveTag("Rails");
				}}
				className={
					activeTag === "Rails" ? "btn-project-github" : "btn-project-visit"
				}
			>
				Rails
			</button>
			<button
				onClick={() => {
					setActiveTag("JavaScript");
				}}
				className={
					activeTag === "JavaScript"
						? "btn-project-github"
						: "btn-project-visit"
				}
			>
				JavaScript
			</button>
			<button
				onClick={() => {
					setActiveTag("React");
				}}
				className={
					activeTag === "React" ? "btn-project-github" : "btn-project-visit"
				}
			>
				React
			</button>
		</div>
	);
};

export default Filter;
