import { FC } from "react";

interface ImageWithFallbackProps {
	src: string;
	fallback: string;
	alt: string;
	type?: "image/wepb";
	className?: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
	src,
	fallback,
	alt,
	type = "image/webp",
	className,
}) => {
	return (
		<picture>
			<source srcSet={src} type={type} />
			<img src={fallback} alt={alt} className={className} />
		</picture>
	);
};

export default ImageWithFallback;
