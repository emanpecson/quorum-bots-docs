import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps {
	isActive: boolean;
	href: string;
	label: string;
	onClick?: () => void;
	disableTranslate?: boolean;
}

export default function NavLink(props: NavLinkProps) {
	return (
		<Link
			onClick={props.onClick}
			href={props.href}
			className={cn(
				props.isActive ? "font-semibold" : "opacity-60",
				!props.disableTranslate && !props.isActive && "hover:translate-x-1",
				"translation-all duration-150 text-nowrap py-1 text-base w-full"
			)}
		>
			{props.label}
		</Link>
	);
}
