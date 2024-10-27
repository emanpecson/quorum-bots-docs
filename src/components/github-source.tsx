import Image from "next/image";
import Link from "next/link";

interface GitHubSourceProps {
	label: string;
	description?: string;
	url: string;
	imageSrc: string;
}

export default function GitHubSource(props: GitHubSourceProps) {
	return (
		<Link
			href={props.url}
			className="rounded-xl border hover:scale-[102.5%] transition-all duration-200 divide-y"
		>
			<Image
				src={props.imageSrc}
				alt={`${props.label} image`}
				width={96}
				height={96}
				className="h-24 w-full rounded-t-xl object-cover"
				unoptimized
			/>
			<div className="p-4 space-y-1.5">
				<h3 className="text-sm font-medium">{props.label}</h3>
				{props.description && <p className="text-xs font-light">{props.description}</p>}
			</div>
		</Link>
	);
}
