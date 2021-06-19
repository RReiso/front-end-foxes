import { nanoid } from "nanoid";
import pic1 from "../images/1.png";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";

// Head data
// export const headData = {
// 	title: "Name | Developer", // e.g: 'Name | Developer'
// 	description: "Welcome to my portfolio", // e.g: Welcome to my website
// };

// Hero data
export const heroData = {
	title: "Hello, my name is ",
	name: "Ruta",
	subtitle: "I am an aspiring full-stack developer",
	cta: "Contact me",
};

// About data
export const aboutData = {
	title: "About me",
	paragraphOne:
		"Hi, I'm Ruta. I am learning web development and currently live in Ottawa, Ontario. I have a math teacher's qualification, have traveled a lot and spent time in places like Japan, Australia, Turkey amongst others. I decided to change careers and embarked on a web development journey which I enjoy tremendeously. I am currently going through freeCodeCamp's curriculum and learning at Front-End Foxes School.",
	paragraphTwo:
		"Coming from a background in math teaching, I have a strong analytical mind and enjoy creating actionable ideas to solve problems and get things done. I love learning, researching, and exploring 'unknown territories'. I would love to join a team that is seeking a curious, persistent, and hardworking self-starter.",
	paragraphThree: "Tech Stack: Ruby, Rails, JavaScript, React, HTML, CSS.",
};

// Projects data
export const projectsData = [
	{
		id: nanoid(),
		img: pic1,
		title: "Teacher's Notes",
		info: "A web app for teachers to browse and share short Zoom activities and games. ",
		info2: "Ruby on Rails, JavaScript, Bootstrap",
		url: "https://teachersnotes.herokuapp.com/",
		repo: "https://github.com/RReiso/teachers-notes", 
	},
	{
		id: nanoid(),
		img: pic2,
		title: "Landing Page",
		info: "freeCodeCamp Responsive Web Design Project - Landing Page",
		info2: "HTML, CSS",
		url: "https://rreiso.github.io/landing-page/",
		repo: "https://github.com/RReiso/landing-page", 
	},
	{
		id: nanoid(),
		img: pic3,
		title: "Registration Form",
		info: "freeCodeCamp Responsive Web Design Project - Registration Form",
		info2: "HTML, CSS",
		url: "https://rreiso.github.io/registration-form/",
		repo: "https://github.com/RReiso/registration-form", 
	},
];

// Contact data
export const contactData = {
	cta: "",
	btn: "",
	email: "rutareiso@protonmail.com",
};

// Footer data

export const footerData = [
	{
		id: nanoid(),
		name: "twitter",
		url: "https://twitter.com/rreisoh",
	},
	{
		id: nanoid(),
		name: "codepen",
		url: "https://codepen.io/rreiso",
	},
	{
		id: nanoid(),
		name: "linkedin",
		url: "https://www.linkedin.com/in/ruta-reisoglu/",
	},
	{
		id: nanoid(),
		name: "github",
		url: "https://github.com/RReiso",
	},
];
