"use client";

import { mainRoutes } from "@/data/routes";
import { PageRoute } from "@/types/page-route";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import { cn } from "@/lib/utils";

interface NavMainRoutesProps {
	onLinkClick?: () => void;
	displayVertical?: boolean;
}

export default function NavMainRoutes(props: NavMainRoutesProps) {
	const pathname = usePathname();

	return (
		<div
			className={cn(
				props.displayVertical ? "flex-col space-x-0 text-left" : "space-x-4",
				"flex place-items-center max-lg:place-items-start text-sm"
			)}
		>
			{mainRoutes.map((route: PageRoute, i: number) => {
				const path = pathname.substring(1, pathname.length).split("/");
				let activePage = "";
				if (path[1] === "libraries") activePage = "Libraries";
				else if (path[0] === "docs") activePage = "Docs";
				else if (path[0] === "contributors") activePage = "Contributors";

				return (
					<NavLink
						key={i}
						href={route.path}
						label={route.name}
						isActive={activePage === route.name}
						onClick={props.onLinkClick}
					/>
				);
			})}
		</div>
	);
}
