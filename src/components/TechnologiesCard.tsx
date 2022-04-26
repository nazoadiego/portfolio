import { FC } from "react";

interface TechnologiesCardProps {
	title: string;
}

const TechnologiesCard: FC<TechnologiesCardProps> = ({ children, title }) => {
	return (
		<div
			className="dark:bg-moon-400 bg-flowerblue-700 text-white
      flex justify-center items-center flex-col rounded-lg py-10 px-2 gap-4"
		>
			{/* The only children would be our Icon component */}
			<h3 className="text-5xl">{children}</h3>
			<h4>{title}</h4>
		</div>
	);
};

export default TechnologiesCard;
