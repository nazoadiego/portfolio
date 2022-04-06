import projects from "../../content/ProjectsInfo";
import { FC } from "react";
import ImageWithFallback from "../ImageWithFallback";

const RecentProject: FC = () => {
	const latestProject = projects[0];

	return (
		<>
			<h3>Most Recent Project</h3>
			<section
				className="grid animate-appear3 grid-cols-1 gap-0 rounded-lg bg-moon-400 shadow-lg xl:grid-cols-2"
				data-cypress="recent-project"
			>
				<ImageWithFallback
					src={require(`../../images/${latestProject.image_path}.webp`)}
					fallback={require(`../../images/${latestProject.image_path}.jpg`)}
					alt={`${latestProject.title}. ${latestProject.subtitle}`}
					className="h-full w-full animate-appear3 rounded-t-lg xl:rounded-l-lg xl:rounded-r-none"
				/>
				<article className="align-center flex w-full animate-appear4 flex-col py-4 xl:py-2 px-6 text-gray-200">
					<h2>
						<a
							href={`${latestProject.visit}`}
							target="_blank"
							rel="noreferrer"
							className="link-underline"
						>
							{latestProject.title}
						</a>
					</h2>
					<p>{latestProject.overview}</p>
					<ul className="mt-2 grid gap-0 grid-cols-2 lg:grid-cols-3">
						{latestProject.technologies.map((technology) => {
							return (
								<li key={technology} className="mt-0">
									{technology}
								</li>
							);
						})}
					</ul>
				</article>
			</section>
		</>
	);
};

export default RecentProject;
