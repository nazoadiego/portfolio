import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h2>Sorry! Something went wrong...</h2>
			<h3>
				Go to <Link to="/">Homepage</Link>
			</h3>
		</>
	);
};

export default NotFound;
