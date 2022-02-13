import DiegoIs from "../components/DiegoIs";
import Education from "../components/Education";
import Technologies from "../components/Technologies";

const AboutPage = () => {
	return (
		<>
			<DiegoIs />
			<div className="grid grid-cols-1 mt-4 lg:gap-8 lg:grid-cols-2 animate-appear4">
				<Education />
				<Technologies />
			</div>
		</>
	);
};

export default AboutPage;
