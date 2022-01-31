const NAME = "Pallavi Prasanna Kumar";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "https://media-exp1.licdn.com/dms/image/C5603AQETePBDMI7E5w/profile-displayphoto-shrink_800_800/0/1517243299585?e=1649289600&v=beta&t=t1Pu0GR2WBaSxEK8ejjkgeQcKRrDA43M_MFup_V3XbA", width: "300px" }),
	React.createElement(
		"p",
		null,
		"A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of Dec 2023. Actively seeking internships in Software Development for Summer 2023."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/PallaviPrasanakumar", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));