const Contact = ({contact}) => {
	return (
		<section>
      <h2>Contact </h2>
			<p>
				<a href={"mailto:" + contact.email}>
					Write me an email!
				</a>
			</p>
		</section>
	);
};

export default Contact;