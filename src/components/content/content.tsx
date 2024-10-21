interface ContentProps {
	children: React.ReactNode;
}

export default function Content(props: ContentProps) {
	return <div className="space-y-14">{props.children}</div>;
}
