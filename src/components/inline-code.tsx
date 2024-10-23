interface InlineCodeProps {
	children: React.ReactNode;
}

export default function InlineCode(props: InlineCodeProps) {
	return (
		<code className="space-x-1.5 bg-neutral-200 px-2 py-0.5 rounded-lg">{props.children}</code>
	);
}
