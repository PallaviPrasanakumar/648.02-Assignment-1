const NAME = "Pallavi Prasanna Kumar";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://media-exp1.licdn.com/dms/image/C5603AQETePBDMI7E5w/profile-displayphoto-shrink_800_800/0/1517243299585?e=1649289600&v=beta&t=t1Pu0GR2WBaSxEK8ejjkgeQcKRrDA43M_MFup_V3XbA" width="300px" />
		<p>A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of Dec 2023. Actively seeking internships in Software Development for Summer 2023.</p>
		<a href="https://github.com/PallaviPrasanakumar" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));