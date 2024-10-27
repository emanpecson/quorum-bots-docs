"use client";

import type { PageRoute, PageRouteGroup } from "@/types/page-route";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

interface NavPageRouteGroupProps {
	group: PageRouteGroup;
	onLinkClick?: () => void;
}

export default function NavPageRouteGroup(props: NavPageRouteGroupProps) {
	const pathname = usePathname();
	return (
		<div className="space-y-4">
			<div className="flex space-x-2 place-items-center text-neutral-600 dark:text-neutral-100">
				<div>
					<props.group.Icon
						size={props.group.label === "Reference" ? 20 : 24}
						strokeWidth={props.group.label === "Reference" ? 2.5 : 2}
					/>
				</div>
				<h2 className="font-semibold text-sm uppercase pointer-events-none">{props.group.label}</h2>
			</div>
			<div className="space-y-0 flex flex-col">
				{props.group.routes.map((route: PageRoute, i: number) => {
					const isActive = route.path === pathname;
					return (
						<NavLink
							key={i}
							isActive={isActive}
							label={route.name}
							href={route.path}
							onClick={props.onLinkClick}
						/>
					);
				})}
			</div>
		</div>
	);
}
