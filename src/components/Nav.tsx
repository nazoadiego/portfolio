import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { FC } from "react";
import NavItems from "./NavItems";

const Nav: FC = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [open, setOpen] = useState(false);

	const toggleDropdown = () => {
		setOpen(!open);
	};

	const toggleTheme = () => {
		setDarkMode(!darkMode);
		const html = document.querySelector("html");
		html.classList.toggle("dark");
	};

	return (
		<nav className="flex justify-between items-center flex-wrap py-6">
			{/* Navbar desktop */}
			<div className="basis-0">
				<h4>Nzoa's Portfolio</h4>
			</div>
			<div className="hidden sm:block">
				<ul className="inline-flex gap-8">
					<NavItems />
				</ul>
			</div>

			<div className="inline-flex sm:block">
				{/* Dark Mode Toggle */}
				<button
					onClick={toggleTheme}
					className="justify-center py-2 flex-grow basis-0"
				>
					<h3 className="hover:text-flowerblue-600 active:hover:text-flowerblue-600">
						{!darkMode && <FaMoon />}
						{darkMode && <FaSun />}
					</h3>
				</button>

				{/* Dropdown for mobile */}
				<button
					onClick={toggleDropdown}
					className="sm:hidden relative bg-flowerblue-200 dark:bg-moon-400 rounded-md p-2 ml-4"
				>
					<h3 className=" hover:text-flowerblue-600 active:hover:text-flowerblue-600">
						<HiOutlineMenu />
					</h3>
					{open && (
						<div className="absolute right-0 top-12 bg-flowerblue-200 font-normal text-flowerblue-700 dark:bg-moon-400 rounded-md pr-10 pl-2 py-2">
							<ul className="text-left">
								<NavItems />
							</ul>
						</div>
					)}
				</button>
			</div>
		</nav>
	);
};

export default Nav;
