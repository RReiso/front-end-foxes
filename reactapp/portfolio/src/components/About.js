const About = ({ about }) => {
	return (
		<section className="about">
			<h2>{about.title}</h2>
			<p>{about.paragraphOne}</p>
			<p>{about.paragraphTwo}</p>
			<p className="about__tech-stack">{about.paragraphThree}</p>
		</section>
	);
};

export default About;
