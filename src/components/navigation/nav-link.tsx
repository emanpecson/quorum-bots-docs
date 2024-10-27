import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps {
	isActive: boolean;
	href: string;
	label: string;
	onClick?: () => void;
}

export default function NavLink(props: NavLinkProps) {
	return (
		<Link
			onClick={props.onClick}
			href={props.href}
			className={cn(
				props.isActive
					? "text-black dark:text-white"
					: "text-neutral-400 hover:text-black dark:hover:text-white hover:translate-x-1 lg:hover:translate-x-0",
				"translation-all duration-150 text-nowrap py-1 text-base w-full"
			)}
		>
			{props.label}
		</Link>
	);
}
