import { Link } from "react-scroll";

const CtaButton = ({ cta }) => (
	<div className="hero__cta">
		<Link to="contact" smooth-duration={1000}>
			{cta}
		</Link>
	</div>
);

export default CtaButton;
