import React from "react";
import CtaButton from "./CtaButton";
import photo from "../images/about.jpg";

const Hero = ({ hero }) => {
	return (
		<section className="hero">
			<div className="hero__container">
				<p className="hero__container__intro">
					{hero.title || "Hi, my name is "}
				</p>
				<h1>{hero.name || "Your name"}</h1>
				<p>{hero.subtitle || "I'm a developer."}</p>
				<CtaButton cta={hero.cta} />
			</div>
			<img className="hero__img" src={photo} alt="Ruta standing in an alley" />
		</section>
	);
};

export default Hero;
