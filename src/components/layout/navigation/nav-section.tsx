"use client";

import { Nav, NavSection as NavSectionType } from "@/data/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavSection({
	navSection,
}: {
	navSection: NavSectionType;
}) {
	const pathname = usePathname();
	return (
		<div className="px-2 py-4 space-y-4">
			<div className="flex space-x-2 place-items-center text-neutral-600 dark:text-neutral-100">
				<navSection.Icon
					size={navSection.label === "Reference" ? 20 : 24}
					strokeWidth={navSection.label === "Reference" ? 2.5 : 2}
				/>
				<h2 className="font-semibold text-sm uppercase">{navSection.label}</h2>
			</div>
			<div className="space-y-2 flex flex-col">
				{navSection.navs.map((nav: Nav, i: number) => {
					const isActive = nav.route === pathname;
					return (
						<Link
							key={i}
							href={nav.route}
							className={cn(
								isActive
									? "text-black dark:text-white"
									: "text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-100 text-nowrap"
							)}
						>
							{nav.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
