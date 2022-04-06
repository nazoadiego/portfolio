import { FC } from "react";
import { Link } from "react-router-dom";

interface NavItemsProps {}

const listItemStyle = "text-md sm:text-2xl sm:link-underline";

const NavItems: FC<NavItemsProps> = () => {
	return (
		<>
			<li className={listItemStyle}>
				<Link data-cy="nav-link" to="/">
					Home
				</Link>
			</li>

			<li className={listItemStyle}>
				<Link data-cy="nav-link" to="/projects">
					Projects
				</Link>
			</li>

			<li className={listItemStyle}>
				<a
					href="https://github.com/nazoadiego"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</li>
		</>
	);
};

export default NavItems;
