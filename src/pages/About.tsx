import DiegoIs from "../components/DiegoIs";
import Education from "../components/Education";
import Technologies from "../components/Technologies";
import Courses from "../components/Courses";
import { FC } from "react";

const AboutPage: FC = () => {
	return (
		<>
			<DiegoIs />
			<div className="grid grid-cols-1 mt-4 lg:gap-8 lg:grid-cols-2 animate-appear4">
				<div className="mt-4 prose lg:prose-xl dark:prose-invert">
					<Education />
				</div>

				<div className="mt-4 prose lg:prose-xl dark:prose-invert">
					<Technologies />
					<Courses />
				</div>
			</div>
		</>
	);
};

export default AboutPage;