const Footer = ({ footer }) => {
	array = Array.from(footer);//Create array
	return (
		<div className="contact_links">
			{array.map((link) => (
				<a href={link.url} className="link">
					<p className="sr-only">Ruta's {link.name} profile</p>
					<i className={"fab fa-lg fa-" + link.name} aria-hidden="true"></i>
				</a>
			))}
		</div>
	);
};

export default Footer;
