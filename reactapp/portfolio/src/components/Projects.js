
const Projects = ({ projects }) => {
	return (
		<section className="projects">
			<h2>Projects</h2>
			<div className="projects__all">
				{projects.map((project) => (
					<div className="projects__all--project__container">
						<h3>{project.title}</h3>
						<img
							className="project__container__img"
							src={project.img}
							alt="Project Screenshot"
						/>
						<p>{project.info}</p>
						<p>{project.info2}</p>
						<a href={project.url}>View {project.title} live!</a>
						<a href={project.repo}>{project.title} on Github!</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
