import { ContentSubheaderType } from "@/types/content-header";

interface ContentSubsectionProps {
	subheader: ContentSubheaderType;
	children: React.ReactNode;
}

export default function ContentSubsection(props: ContentSubsectionProps) {
	return (
		<div>
			<h3
				ref={props.subheader.ref}
				id={props.subheader.id}
				className="text-xl font-semibold py-1 text-onyx dark:text-neutral-100"
			>
				{props.subheader.label}
			</h3>
			<div className="pt-1 space-y-4">{props.children}</div>
		</div>
	);
}
