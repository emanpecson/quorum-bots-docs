interface ContentTextProps {
	children: React.ReactNode;
}

export default function ContentText(props: ContentTextProps) {
	return <p className="font-light text-neutral-800 dark:text-neutral-200">{props.children}</p>;
}
