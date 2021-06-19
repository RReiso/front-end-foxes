import photo from "../images/about.jpg"

const About = ({about}) => {
	return (
			<section>
					<h2>
						{about.title}
					</h2>
            <img src={photo} alt="Ruta standing in an alley"/>
            <p>{about.paragraphOne}</p>
            <p>{about.paragraphTwo}</p>
            <p>{about.paragraphThree}</p>
			</section>
	);
};

export default About;
