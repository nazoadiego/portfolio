import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { FC } from "react";

const Nav: FC = () => {
	const [darkMode, setDarkMode] = useState(true);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
		const html = document.querySelector("html");
		html.classList.toggle("dark");
	};

	return (
		<nav>
			<Link to="/">
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
		</nav>
	);
};

export default Nav;
