import {
	LinkIcon,
	LucideIcon,
	RabbitIcon,
	SquareFunctionIcon,
} from "lucide-react";

export interface NavSection {
	label: string;
	Icon: LucideIcon;
	navs: Nav[];
}

export interface Nav {
	name: string;
	route: string;
}

const mPath = "/docs/methods";

export const navSections: NavSection[] = [
	{
		label: "Introduction",
		Icon: RabbitIcon,
		navs: [
			{
				name: "Motivation",
				route: "/docs/motivation",
			},
			{
				name: "Overview",
				route: "/docs/overview",
			},
		],
	},
	{
		label: "Methods",
		Icon: SquareFunctionIcon,
		navs: [
			{ name: "Color", route: `${mPath}/color` },
			{ name: "ColorMatrix", route: `${mPath}/color-matrix` },
			{ name: "Device", route: `${mPath}/device` },
			{ name: "Display", route: `${mPath}/display` },
			{ name: "DistanceSensor", route: `${mPath}/distance-sensor` },
			{ name: "ForceSensor", route: `${mPath}/force-sensor` },
			{ name: "Light", route: `${mPath}/light` },
			{ name: "LightMatrix", route: `${mPath}/light-matrix` },
			{ name: "Motor", route: `${mPath}/motor` },
		],
	},
	{
		label: "Reference",
		Icon: LinkIcon,
		navs: [
			{
				name: "Quorum Language",
				route: "https://quorumlanguage.com",
			},
			{
				name: "Quorum Studio",
				route: "https://quorumlanguage.com/download.html",
			},
			{
				name: "GitHub",
				route: "https://github.com/qorf",
			},
		],
	},
];

export const headerNavs: Nav[] = [
	{ name: "Home", route: "/" },
	{ name: "Docs", route: "/docs/motivation" },
	{ name: "Methods", route: navSections[1].navs[0].route },
];
