(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(8),r=a.n(i),s=(a(25),a(26),a(16)),o=a(10),l=a(3),j=a(2),h=a.p+"static/media/1.0e66c73f.png",b=a.p+"static/media/2.34a70b9d.png",m=a.p+"static/media/3.380bb6a4.png",d={title:"Hello, my name is ",name:"Ruta",subtitle:"I am an aspiring full-stack developer",cta:"Contact me"},u={title:"About me",paragraphOne:"Hi, I'm Ruta. I am learning web development and currently live in Ottawa, Ontario. I have a math teacher's qualification, have traveled a lot and spent time in places like Japan, Australia, Turkey amongst others. I decided to change careers and embarked on a web development journey which I enjoy tremendeously. I am currently going through freeCodeCamp's curriculum and learning at Front-End Foxes School.",paragraphTwo:"Coming from a background in math teaching, I have a strong analytical mind and enjoy creating actionable ideas to solve problems and get things done. I love learning, researching, and exploring 'unknown territories'. I would love to join a team that is seeking a curious, persistent, and hardworking self-starter.",paragraphThree:"Tech Stack: Ruby, Rails, JavaScript, React, HTML, CSS."},p=[{id:Object(j.a)(),img:h,title:"Teacher's Notes",info:"A web app for teachers to browse and share short Zoom activities and games. ",info2:"Ruby on Rails, JavaScript, Bootstrap",url:"https://teachersnotes.herokuapp.com/",repo:"https://github.com/RReiso/teachers-notes"},{id:Object(j.a)(),img:b,title:"Landing Page",info:"freeCodeCamp Responsive Web Design Project - Landing Page",info2:"HTML, CSS",url:"https://rreiso.github.io/landing-page/",repo:"https://github.com/RReiso/landing-page"},{id:Object(j.a)(),img:m,title:"Registration Form",info:"freeCodeCamp Responsive Web Design Project - Registration Form",info2:"HTML, CSS",url:"https://rreiso.github.io/registration-form/",repo:"https://github.com/RReiso/registration-form"}],g={cta:"",btn:"",email:"rutareiso@protonmail.com"},O=[{id:Object(j.a)(),name:"twitter",url:"https://twitter.com/rreisoh"},{id:Object(j.a)(),name:"codepen",url:"https://codepen.io/rreiso"},{id:Object(j.a)(),name:"linkedin",url:"https://www.linkedin.com/in/ruta-reisoglu/"},{id:Object(j.a)(),name:"github",url:"https://github.com/RReiso"}],f=a(20),x=a(0),v=function(e){var t=e.cta;return Object(x.jsx)("button",{className:"hero__container__cta",children:Object(x.jsx)(f.Link,{to:"contact","smooth-duration":1e3,children:t})})},k=a.p+"static/media/about.133c4459.jpg",_=function(e){var t=e.hero;return Object(x.jsxs)("section",{className:"hero",children:[Object(x.jsxs)("div",{className:"hero__container",children:[Object(x.jsx)("p",{className:"hero__container__intro",children:t.title||"Hi, my name is "}),Object(x.jsx)("h1",{children:t.name||"Your name"}),Object(x.jsx)("p",{children:t.subtitle||"I'm a developer."}),Object(x.jsx)(v,{cta:t.cta})]}),Object(x.jsx)("img",{className:"hero__img",src:k,alt:"Ruta standing in an alley"})]})},w=function(e){var t=e.about;return Object(x.jsxs)("section",{className:"about",children:[Object(x.jsx)("h2",{children:t.title}),Object(x.jsx)("p",{children:t.paragraphOne}),Object(x.jsx)("p",{children:t.paragraphTwo}),Object(x.jsx)("p",{className:"about__tech-stack",children:t.paragraphThree})]})},N=function(e){var t=e.projects;return Object(x.jsxs)("section",{className:"projects",children:[Object(x.jsx)("h2",{children:"Projects"}),Object(x.jsx)("div",{className:"projects__all",children:t.map((function(e){return Object(x.jsxs)("div",{className:"project",children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("img",{className:"project__img",src:e.img,alt:"Project Screenshot"}),Object(x.jsx)("p",{children:e.info}),Object(x.jsx)("p",{className:"project__tech-stack",children:e.info2}),Object(x.jsx)("a",{className:"link",href:e.url,children:"View live"}),Object(x.jsx)("a",{className:"link",href:e.repo,children:"View on Github"})]})}))})]})},R=function(e){var t=e.contact;return Object(x.jsxs)("section",{className:"contact",children:[Object(x.jsx)("h2",{children:"Contact "}),Object(x.jsxs)("p",{children:["Let's get in touch - ",Object(x.jsx)("a",{className:"link",href:"mailto:"+t.email,children:"write an email!"})]})]})},S=function(e){var t=e.footer,a=Array.from(t);return Object(x.jsx)("div",{className:"footer",children:a.map((function(e){return Object(x.jsxs)("a",{href:e.url,className:"footer__link link",children:[Object(x.jsxs)("p",{className:"sr-only",children:["Ruta's ",e.name," profile"]}),Object(x.jsx)("i",{className:"fab fa-lg fa-"+e.name,"aria-hidden":"true"})]})}))})};a(38);var y=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({}),r=Object(l.a)(i,2),j=r[0],h=r[1],b=Object(n.useState)([]),m=Object(l.a)(b,2),f=m[0],v=m[1],k=Object(n.useState)({}),y=Object(l.a)(k,2),C=y[0],I=y[1],T=Object(n.useState)({}),F=Object(l.a)(T,2),L=F[0],P=F[1];return Object(n.useEffect)((function(){c(Object(o.a)({},d)),h(Object(o.a)({},u)),v(Object(s.a)(p)),I(Object(o.a)({},g)),P(Object(s.a)(O))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_,{hero:a}),Object(x.jsx)(w,{about:j}),Object(x.jsx)(N,{projects:f}),Object(x.jsx)(R,{contact:C}),Object(x.jsx)(S,{footer:L})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.849346b6.chunk.js.map