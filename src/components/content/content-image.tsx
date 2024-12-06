import Image from "next/image";

interface ContentImageProps {
	src: string;
	alt: string;
}

export default function ContentImage(props: ContentImageProps) {
	return (
		<Image
			src={props.src}
			height={24}
			width={24}
			alt={props.alt}
			className="max-w-[40rem] w-full rounded-3xl border object-contain shadow-lg"
			unoptimized
		/>
	);
}
