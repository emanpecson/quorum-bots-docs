"use client";

import { navSections } from "@/data/routes";
import { NavSection as NavSectionType } from "@/data/routes";
import NavSection from "./nav-section";

interface NavigationProps {
	children: React.ReactNode;
}

export default function Navigation(props: NavigationProps) {
	return (
		<div className="flex h-screen pt-20">
			<div className="w-80 px-4 overflow-y-auto pb-16">
				{navSections.map((sec: NavSectionType, i: number) => (
					<NavSection navSection={sec} key={i} />
				))}
			</div>
			<div className="overflow-y-auto w-full px-4">{props.children}</div>
		</div>
	);
}
