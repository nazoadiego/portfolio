import { motion } from "framer-motion";
import { FC } from "react";

interface CardProps {
	title: string;
	subtitle: string;
	image_path: string;
}

const CardProject: FC<CardProps> = (props) => {
	const { title, subtitle, image_path } = props;

	return (
		<motion.img
			src={require("../images/" + image_path + ".jpg")}
			alt={title + ". " + subtitle}
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className="h-full w-full shadow-lg rounded-lg xl:rounded-lg aspect-2"
		/>
	);
};

export default CardProject;
