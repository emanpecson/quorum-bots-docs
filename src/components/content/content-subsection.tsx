import { ContentSubheaderType } from "@/types/content-header";

interface ContentSubsectionProps {
	subheader: ContentSubheaderType;
	children: React.ReactNode;
}

export default function ContentSubsection(props: ContentSubsectionProps) {
	return (
		<div>
			<h3 ref={props.subheader.ref} id={props.subheader.id} className="text-lg font-medium py-1">
				{props.subheader.label}
			</h3>
			<div className="pt-1 space-y-4">{props.children}</div>
		</div>
	);
}
