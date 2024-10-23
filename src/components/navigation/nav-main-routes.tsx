"use client";

import { mainRoutes } from "@/data/routes";
import { cn } from "@/lib/utils";
import { PageRoute } from "@/types/page-route";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMainRoutes() {
	const pathname = usePathname();

	return (
		<div className="flex space-x-4 place-items-center text-sm">
			{mainRoutes.map((route: PageRoute, i: number) => {
				const path = pathname.substring(1, pathname.length).split("/");
				let activePage = "";
				if (path[1] === "libraries") activePage = "Libraries";
				else if (path[0] === "docs") activePage = "Docs";
				else if (path[0] === "contributors") activePage = "Contributors";

				return (
					<Link
						key={i}
						href={route.path}
						className={cn(
							activePage === route.name
								? "font-medium text-neutral-800 dark:text-neutral-200"
								: "font-normal text-neutral-500"
						)}
					>
						{route.name}
					</Link>
				);
			})}
		</div>
	);
}
