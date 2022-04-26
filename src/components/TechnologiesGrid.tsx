import { FC, useState } from "react";
import TechnologiesCard from "../components/TechnologiesCard";
import {
	SiCss3,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiRuby,
	SiRubyonrails,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

interface TechnologiesGridProps {}

const TechnologiesGrid: FC<TechnologiesGridProps> = ({ children }) => {
	const [showAll, setShowAll] = useState(false);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
				<TechnologiesCard title="JavaScript">
					<SiJavascript />
				</TechnologiesCard>
				<TechnologiesCard title="React">
					<SiReact />
				</TechnologiesCard>
				<TechnologiesCard title="TypeScript">
					<SiTypescript />
				</TechnologiesCard>
				<TechnologiesCard title="Ruby">
					<SiRuby />
				</TechnologiesCard>
				<TechnologiesCard title="Ruby On Rails">
					<SiRubyonrails />
				</TechnologiesCard>
				<TechnologiesCard title="NextJS">
					<SiNextdotjs />
				</TechnologiesCard>
				<TechnologiesCard title="HTML5">
					<SiHtml5 />
				</TechnologiesCard>
				<TechnologiesCard title="CSS3">
					<SiCss3 />
				</TechnologiesCard>
				{showAll && (
					<>
						<TechnologiesCard title="Sass">
							<SiSass />
						</TechnologiesCard>
						<TechnologiesCard title="Tailwind">
							<SiTailwindcss />
						</TechnologiesCard>
						<TechnologiesCard title="PostgreSQL">
							<SiPostgresql />
						</TechnologiesCard>
						<TechnologiesCard title="Git">
							<SiGit />
						</TechnologiesCard>
					</>
				)}
			</div>
			<div className="w-full flex justify-center">
				<button className="" onClick={() => setShowAll(!showAll)}>
					{!showAll ? "Show more" : "Show less"}
				</button>
			</div>
		</>
	);
};

export default TechnologiesGrid;
