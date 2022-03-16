import { FC } from "react";
import courses from "../content/CoursesInfo";

const Courses: FC = () => {
	return (
		<>
			<h2 className="underline lg:ml-8">Courses</h2>
			<ul className="pl-0">
				{courses.map((course) => {
					return <li key={course}>{course}</li>;
				})}
			</ul>
		</>
	);
};

export default Courses;
