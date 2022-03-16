import { FC } from "react";
import technologies from "../content/TechnologiesInfo";

const Technologies: FC = () => {
	return (
		<>
			<h2 className="underline lg:ml-8">Technologies</h2>
			<ul className="pl-0 grid gap-0 grid-cols-2 lg:grid-cols-3">
				{technologies.map((technology) => {
					return (
						<li key={technology} className="mt-0">
							{technology}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Technologies;
