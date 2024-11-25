import Link from "next/link";

interface LinkInfo {
	label: string;
	href: string;
}

interface FooterLinksProps {
	heading: string;
	links: LinkInfo[];
}

export default function FooterLinks(props: FooterLinksProps) {
	return (
		<div className="flex justify-end">
			<div className="space-y-4">
				<p className="font-semibold">{props.heading}</p>
				<div className="font-normal">
					<div className="flex flex-col space-y-4 font-normal">
						{props.links.map((link: LinkInfo) => (
							<Link
								className="text-wrap w-fit text-onyx/80 hover:text-onyx dark:text-neutral-100/80 dark:hover:text-neutral-100 transition-colors duration-150"
								href={link.href}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
