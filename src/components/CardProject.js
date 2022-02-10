const CardProject = (props) => {
	const { title, subtitle, image_path } = props;

	return (
		<img
			src={require("../images/" + image_path + ".jpg")}
			alt={title + ". " + subtitle}
			className="h-full w-full animate-appear2 shadow-lg rounded-lg xl:rounded-lg aspect-2"
		/>
	);
};

export default CardProject;
