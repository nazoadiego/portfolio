import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Components
import CardProject from "../components/CardProject";
import ProjectDetails from "./ProjectDetails";
import Filter from "../components/Filter";
// Objects
import projects from "../components/ProjectsObjects";

const ProjectsPage = () => {
	const [filtered, setFiltered] = useState(projects);
	const [activeTag, setActiveTag] = useState("");

	let { path, url } = useRouteMatch();

	return (
		<>
			<Switch>
				<Route exact path={path}>
					<h1 className="underline">Projects</h1>
					<Filter
						projects={projects}
						setFiltered={setFiltered}
						activeTag={activeTag}
						setActiveTag={setActiveTag}
					/>
					<motion.div
						layout
						className="grid gap-2 grid-cols-1 lg:grid-cols-2 mt-4"
					>
						<AnimatePresence>
							{filtered.map((project) => {
								return (
									<Link key={project.id} to={`${url}/${project.id}`}>
										<CardProject
											title={project.title}
											subtitle={project.subtitle}
											image_path={project.image_path}
										/>
									</Link>
								);
							})}
						</AnimatePresence>
					</motion.div>
				</Route>
				<Route path={`${path}/:projectId`}>
					<ProjectDetails projects={projects} />
				</Route>
			</Switch>
		</>
	);
};

export default ProjectsPage;

import React, { Component } from "react";
import './reload.scss';
import axios from 'axios';


class Reload extends Component {
    constructor(props){
    super(props);
    this.handleNext.bind(this)
  }

  handleNext = e => {
    e.preventDefault();
    const s = axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
      var data = res.data;

      const s = data.map(element => {
        var m = 0
          for(element.id = m; element.id < m; element.id ++ ){
            element.id += 1

          }
            console.log(element.id);
          // }
      });

    })
  };

  render(){
    return(
      <div className="buttons">
        <div className="previous">
          {/* <h2 onClick={this.handlePrevious}>Previous</h2> */}
        </div>
        <div className="next">
          <h2 onClick={this.handleNext}>Next</h2>
        </div>
      </div>
    );
  }
}

export default Reload;
