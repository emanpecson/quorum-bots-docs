import { LucideIcon } from "lucide-react";

export interface PageRouteGroup {
	label: string;
	Icon: LucideIcon;
	routes: PageRoute[];
	prevGroup?: PageRouteGroup;
	nextGroup?: PageRouteGroup;
}

export interface PageRoute {
	name: string;
	path: string;
}
