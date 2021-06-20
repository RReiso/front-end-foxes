const Footer = ({ footer }) => {
	let array = Array.from(footer); //Create array
	return (
		<div className="footer">
			{array.map((link) => (
				<a href={link.url} className="footer__link link">
					<p className="sr-only">Ruta's {link.name} profile</p>
					<i className={"fab fa-lg fa-" + link.name} aria-hidden="true"></i>
				</a>
			))}
		</div>
	);
};

export default Footer;
