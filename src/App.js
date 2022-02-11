import "./stylesheets/App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#0F0F0F] lg:flex">
				<header className="navbar-mobile lg:navbar-desktop">
					<Nav />
				</header>

				<main className="py-8 flex h-full flex-col px-8 lg:w-5/6 lg:px-16">
					<Switch>
						<Route exact path="/portfolio-react">
							<HomePage />
						</Route>
						<Route path="/about">
							<AboutPage />
						</Route>
						<Route path="/projects">
							<ProjectsPage />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
