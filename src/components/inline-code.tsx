interface InlineCodeProps {
	children: React.ReactNode;
}

export default function InlineCode(props: InlineCodeProps) {
	return (
		<code className="space-x-1.5 bg-neutral-200 dark:bg-neutral-700 dark:text-red-400 px-2 py-0.5 rounded-lg">
			{props.children}
		</code>
	);
}
