import { LinkIcon, LucideIcon, RabbitIcon, SquareFunctionIcon } from "lucide-react";
import { quorumGithubUrl, quorumLanguageUrl, quorumStudioUrl } from "./url";

export interface PageRouteGroup {
	label: string;
	Icon: LucideIcon;
	routes: PageRoute[];
}

export interface PageRoute {
	name: string;
	path: string;
}

// methods path prefix shorthand
const mPath = "/docs/methods";

export const docsRouteGroups: PageRouteGroup[] = [
	{
		label: "Introduction",
		Icon: RabbitIcon,
		routes: [
			{ name: "Motivation", path: "/docs/motivation" },
			{ name: "Overview", path: "/docs/overview" },
		],
	},
	{
		label: "Methods",
		Icon: SquareFunctionIcon,
		routes: [
			{ name: "Color", path: `${mPath}/color` },
			{ name: "ColorMatrix", path: `${mPath}/color-matrix` },
			{ name: "Device", path: `${mPath}/device` },
			{ name: "Display", path: `${mPath}/display` },
			{ name: "DistanceSensor", path: `${mPath}/distance-sensor` },
			{ name: "ForceSensor", path: `${mPath}/force-sensor` },
			{ name: "Light", path: `${mPath}/light` },
			{ name: "LightMatrix", path: `${mPath}/light-matrix` },
			{ name: "Motor", path: `${mPath}/motor` },
		],
	},
	{
		label: "Reference",
		Icon: LinkIcon,
		routes: [
			{ name: "Quorum Language", path: quorumLanguageUrl },
			{ name: "Quorum Studio", path: quorumStudioUrl },
			{ name: "GitHub", path: quorumGithubUrl },
		],
	},
];

export const mainRoutes: PageRoute[] = [
	{ name: "Home", path: "/" },
	{ name: "Docs", path: docsRouteGroups[0].routes[0].path },
	{ name: "Methods", path: docsRouteGroups[1].routes[0].path },
	{ name: "Contributors", path: "/contributors" },
];
