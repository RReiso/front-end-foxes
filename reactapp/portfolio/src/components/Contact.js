const Contact = ({contact}) => {
	return (
		<section className="contact">
			<h2>Contact </h2>
			<p>
				Let's get in touch - <a className="link" href={"mailto:" + contact.email}>write an email!</a>
			</p>
		</section>
	);
};

export default Contact;
