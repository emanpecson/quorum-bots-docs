import Link from "next/link";

interface InlineLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function InlineLink(props: InlineLinkProps) {
	return (
		<Link
			rel="noopener noreferrer"
			target="_blank"
			href={props.href}
			className="text-blue-700 dark:text-blue-300 hover:underline transition-all duration-150 px-1 font-normal"
		>
			{props.children}
		</Link>
	);
}
