import { Link } from "react-scroll";

const CtaButton = ({ cta }) => (
	<button className="hero__container__cta">
		<Link to="contact" smooth-duration={1000}>
			{cta}
		</Link>
	</button>
);

export default CtaButton;
