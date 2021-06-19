const Footer = ({ footer }) => {
	console.log(footer);
	console.log(typeof footer);
	let array = [];
	array = Array.from(footer);
	// footer.map((f) => {
	//   array.push({name:f.name, url:f.url});
	//   console.log(f.name)
	// })
	console.log(array);
	return (
		<div className="contact_links">
			{/* {array.map((f) => (
				<div>
					<h3>{f.name}</h3>
				</div>
			))} */}
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
