import "./stylesheets/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-white dark:bg-[#0F0F0F] lg:flex transition-colors duration-300">
				<header className="navbar-mobile lg:navbar-desktop">
					<Nav />
				</header>
				<main className="lg:w-5/6 flex flex-col px-8 my-8 lg:px-16 h-full">
					<Switch>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
