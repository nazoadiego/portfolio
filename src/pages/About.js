import DiegoIs from "../components/DiegoIs";

const AboutPage = () => {
	return (
		<>
			<DiegoIs />
			<div className="mt-4 w-1/2 prose lg:prose-xl dark:prose-invert">
				<h2 className="underline">Education</h2>
				<p>
					I had been studying literature in university a few years when I
					finally decided to learn japanese on my own. Partly because of
					japanese literature and music, partly because of anime I must confess.
					While learning japanese I came into contact with software that I found
					amazing like Anki and Migaku. First, I started changing the background
					color and the font of a page. Then, running Python scripts (made by
					someone else of course) to convert digital japanese dictionaries. By
					then I already felt like a complete hacker (little did I know...)
				</p>
				<p>
					I went on to learn on my own as much as I could, and I found myself
					wanting more and more. I loved that there was so much to learn, I
					loved the feeling of learning so much so quickly. And before I knew
					it, I took the decision of becoming a web developer. I wanted to work
					with other people on delivering the best projects possible, and I
					wanted to keep learning and growing. That is when I decided to enroll
					in Le Wagon bootcamp for fullstack web development, which was the best
					learning experience of my life. An intensive course of 8 hours a day,
					always focused on learning by doing and working with others (pair
					programming, projects).
				</p>
				<p>
					There I learned Ruby, Ruby On Rails, JavaScript, SQL, semantical
					HTML5, CSS, and much more. From the first step designing in Figma, to
					version control with Git and GitHub, and finally deploying to a cloud
					platform like Heroku. And since in programming you learn best by
					actively doing, and your education falls completely on your own
					shoulders. After the bootcamp I have continued to work on my own
					projects and continue to do courses.{" "}
				</p>
				<p>
					Hearing and learning from people that know much more than I do has
					always been an invaluable experience. Theses are some of the courses I
					have completed:
				</p>
			</div>
		</>
	);
};

export default AboutPage;
