import "./stylesheets/App.css";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/layout";

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/projects">
						<ProjectsPage />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
