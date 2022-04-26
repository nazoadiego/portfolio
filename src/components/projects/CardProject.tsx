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
		<picture>
			<source
				srcSet={require("../../images/" + image_path + ".webp")}
				type="image/webp"
			/>
			<motion.img
				src={require("../../images/" + image_path + ".jpg")}
				alt={title + ". " + subtitle}
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.4 }}
				className="h-full w-full shadow-lg rounded-lg xl:rounded-lg aspect-2"
			/>
		</picture>
	);
};

export default CardProject;
