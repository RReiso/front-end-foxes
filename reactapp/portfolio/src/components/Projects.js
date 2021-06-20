
const Projects = ({ projects }) => {
	return (
		<section className="projects">
			<h2>Projects</h2>
			<div className="projects__all">
				{projects.map((project) => (
					<div className="project">
						<h3>{project.title}</h3>
						<img
							className="project__img"
							src={project.img}
							alt="Project Screenshot"
						/>
						<p>{project.info}</p>
						<p className="project__tech-stack">{project.info2}</p>
						<a className="link" href={project.url}>View live</a>
						<a className="link" href={project.repo}>View on Github</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
