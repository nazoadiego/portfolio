import { FC } from "react";
import Nav from "../components/Nav";

const Layout: FC = ({ children }) => {
	return (
		<div
			className="min-h-screen px-8 xl:px-40 bg-white transition-colors
      duration-300 dark:bg-moon-700 pb-32"
		>
			<Nav />
			<main className="lg:px-24">{children}</main>
		</div>
	);
};

export default Layout;
