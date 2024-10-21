"use client";

import type { PageRoute, PageRouteGroup } from "@/types/page-route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavPageRouteGroupProps {
	group: PageRouteGroup;
}

export default function NavPageRouteGroup(props: NavPageRouteGroupProps) {
	const pathname = usePathname();
	return (
		<div className="space-y-4">
			<div className="flex space-x-2 place-items-center text-neutral-600 dark:text-neutral-100">
				<props.group.Icon
					size={props.group.label === "Reference" ? 20 : 24}
					strokeWidth={props.group.label === "Reference" ? 2.5 : 2}
				/>
				<h2 className="font-semibold text-sm uppercase">{props.group.label}</h2>
			</div>
			<div className="space-y-0 flex flex-col">
				{props.group.routes.map((route: PageRoute, i: number) => {
					const isActive = route.path === pathname;
					return (
						<Link
							key={i}
							href={route.path}
							className={cn(
								isActive
									? "text-black dark:text-white"
									: "text-neutral-400 hover:text-black dark:hover:text-white hover:translate-x-1",
								"translation-all duration-150 text-nowrap py-1"
							)}
						>
							{route.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
