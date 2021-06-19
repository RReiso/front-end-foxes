
const Projects = ({ projects }) => {
	return (
		<section>
			<h2>Projects</h2>
			{projects.map((project) => (
				<div>
					<h3>{project.title}</h3>
					<img src={project.img} alt="Project Screenshot" />
					<p>{project.info}</p>
					<p>{project.info2}</p>
					<a href={project.url}>View {project.title} live!</a>
					<a href={project.repo}>{project.title} on Github!</a>
				</div>
			))}
		</section>
	);
};

export default Projects;
