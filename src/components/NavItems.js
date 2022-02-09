import { Link } from "react-router-dom";

const NavItems = () => {
	return (
		<>
			<Link to="/portfolio-react">
				<h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
					Home
				</h2>
			</Link>

			<Link to="/about">
				<h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
					About
				</h2>
			</Link>

			<Link to="/projects">
				<h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
					Projects
				</h2>
			</Link>
		</>
	);
};

export default NavItems;
