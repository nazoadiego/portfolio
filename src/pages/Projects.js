const Projects = () => {
	return (
		<>
			<h1 className="underline">Projects</h1>

			<div className="grid lg:grid-cols-2">
				<div>
					<h2 className="animate-appear">Completed</h2>
					<div className="card-project animate-appear2">
						<div className="flex flex-col items-start m-4">
							<h3>Kinoko</h3>
							<h5 className="text-flowerblue-400">TIMEBOXING APP</h5>
						</div>
						<div className="flex justify-end mb-8 mr-8">
							<a href="https://github.com/nazoadiego/Kinoko">
								<div className="btn-project-github">
									<h5>Github</h5>
								</div>
							</a>
							<a href="https://www.kinoko.app/">
								<div className="btn-project-visit">
									<h5 className="text-black">Visit</h5>
								</div>
							</a>
						</div>
					</div>

					<div className="card-project animate-appear2">
						<div className="flex flex-col items-start m-4">
							<h3>BookAnArtist</h3>
							<h5 className="text-flowerblue-400">BOOKING WEBSITE</h5>
						</div>
						<div className="flex justify-end items-end mb-8 mr-8">
							<a href="https://github.com/nazoadiego/BookAnArtist">
								<div className="btn-project-github">
									<h5>Github</h5>
								</div>
							</a>
							<a href="https://bookanartist.herokuapp.com/">
								<div className="btn-project-visit">
									<h5 className="text-black">Visit</h5>
								</div>
							</a>
						</div>
					</div>
				</div>

				<div>
					<h2 className="animate-appear">On-going</h2>
					<div className="card-project animate-appear2">
						<div className="flex flex-col items-start m-4">
							<h3>Kinoko V2</h3>
							<h5 className="text-flowerblue-400">TIMEBOXING APP</h5>
						</div>
						<div className="flex justify-end mb-8 mr-8">
							<a href="https://github.com/nazoadiego/Kinoko">
								<div className="btn-project-github">
									<h5>Github</h5>
								</div>
							</a>
							<a href="https://www.kinoko.app/">
								<div className="btn-project-visit">
									<h5 className="text-black">Visit</h5>
								</div>
							</a>
						</div>
					</div>

					<div className="card-project animate-appear2">
						<div className="flex flex-col items-start m-4">
							<h3>BookAnArtist V2</h3>
							<h5 className="text-flowerblue-400">BOOKING WEBSITE</h5>
						</div>
						<div className="flex justify-end mb-8 mr-8">
							<a href="https://github.com/nazoadiego/BookAnArtist">
								<div className="btn-project-github">
									<h5>Github</h5>
								</div>
							</a>
							<a href="https://bookanartist.herokuapp.com/">
								<div className="btn-project-visit">
									<h5 className="text-black">Visit</h5>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h2 className="animate-appear3">Planned</h2>

				<div className="grid grid-cols-2">
					<div className="card-project py-4 animate-appear4">
						<div className="flex flex-col items-start m-4">
							<h3>Mural</h3>
							<h5 className="text-flowerblue-400">LYRICS TRANSLATION</h5>
						</div>
						<div className="flex justify-end mb-8 mr-8">
							<div className="btn-project-github">
								<h5>Github</h5>
							</div>
							<div className="btn-project-visit">
								<h5 className="text-black">Visit</h5>
							</div>
						</div>
					</div>

					<div className="card-project py-4 animate-appear4">
						<div className="flex flex-col items-start m-4">
							<h3>Arukeyo</h3>
							<h5 className="text-flowerblue-400">LANGUAGE LEARNING BLOG</h5>
						</div>
						<div className="flex justify-end mb-8 mr-8">
							<div className="btn-project-github">
								<h5>Github</h5>
							</div>
							<div className="btn-project-visit">
								<h5 className="text-black">Visit</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
