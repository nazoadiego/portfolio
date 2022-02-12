import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const NavItems = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
		const html = document.querySelector("html");
		html.classList.toggle("dark");
	};

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
			<button onClick={toggleTheme} className="w-full flex justify-center py-2">
				<h2 className="nav-item hover:text-flowerblue-600 active:hover:text-flowerblue-600">
					{!darkMode && <FaMoon />}
					{darkMode && <FaSun />}
				</h2>
			</button>
		</>
	);
};

export default NavItems;
