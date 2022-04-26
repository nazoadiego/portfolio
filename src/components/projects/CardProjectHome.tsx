import { FC } from "react";
import ImageWithFallback from "../ImageWithFallback";
import type { Project } from "../../types/index";
import { Link } from "react-router-dom";

interface CardProjectHomeProps {
	project: Project;
	reversed: boolean;
}

// TODO MAKE THEM BIGGER!!! WHOLE SCREEN

const CardProjectHome: FC<CardProjectHomeProps> = ({ project, reversed }) => {
	const article_style = reversed
		? "align-center flex w-full flex-col py-4 xl:py-2 px-6 text-gray-200 xl:-order-1"
		: "align-center flex w-full flex-col py-4 xl:py-2 px-6 text-gray-200";

	const image_style = reversed
		? "h-full w-full rounded-t-lg xl:rounded-r-lg xl:rounded-l-none"
		: "h-full w-full rounded-t-lg xl:rounded-l-lg xl:rounded-r-none";

	return (
		<article
			className="grid grid-cols-1 gap-0 rounded-lg bg-moon-400 shadow-lg xl:grid-cols-2
    "
		>
			<ImageWithFallback
				src={require(`../../images/${project.image_path}.webp`)}
				fallback={require(`../../images/${project.image_path}.jpg`)}
				alt={`${project.title}. ${project.subtitle}`}
				className={image_style}
			/>
			<div className={article_style}>
				<h2>
					<Link to={`projects/${project.id}`} className="link-underline">
						{project.title}
					</Link>
				</h2>
				<p className="truncate">{project.overview}</p>
				<ul className="mt-2 grid gap-0 grid-cols-2 lg:grid-cols-3">
					{project.technologies.map((technology) => {
						return (
							<li key={technology} className="mt-0">
								{technology}
							</li>
						);
					})}
				</ul>
			</div>
		</article>
	);
};

export default CardProjectHome;
