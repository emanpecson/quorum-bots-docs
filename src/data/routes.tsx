import { LinkIcon, RabbitIcon, SquareFunctionIcon } from "lucide-react";
import { quorumGithubUrl, quorumLanguageUrl, quorumStudioUrl } from "./url";
import type { PageRoute, PageRouteGroup } from "@/types/page-route";

// ----- defined docs route groups ----- //

const dpath = "/docs";
const introductionRouteGroup: PageRouteGroup = {
	label: "Introduction",
	Icon: RabbitIcon,
	routes: [
		{ name: "Motivation", path: `${dpath}/motivation` },
		{ name: "Overview", path: `${dpath}/overview` },
		{ name: "Getting Started", path: `${dpath}/getting-started` },
	],
};

const mpath = `${dpath}/libraries`;
const librariesRouteGroup: PageRouteGroup = {
	label: "Libraries",
	Icon: SquareFunctionIcon,
	routes: [
		{ name: "Button", path: `${mpath}/button` },
		{ name: "Color", path: `${mpath}/color` },
		{ name: "ColorMatrix", path: `${mpath}/color-matrix` },
		{ name: "Device", path: `${mpath}/device` },
		{ name: "Display", path: `${mpath}/display` },
		{ name: "DistanceSensor", path: `${mpath}/distance-sensor` },
		{ name: "ForceSensor", path: `${mpath}/force-sensor` },
		{ name: "Light", path: `${mpath}/light` },
		{ name: "LightMatrix", path: `${mpath}/light-matrix` },
		{ name: "Motor", path: `${mpath}/motor` },
	],
};

const referenceRouteGroup: PageRouteGroup = {
	label: "Reference",
	Icon: LinkIcon,
	routes: [
		{ name: "Quorum Language", path: quorumLanguageUrl },
		{ name: "Quorum Studio", path: quorumStudioUrl },
		{ name: "GitHub", path: quorumGithubUrl },
	],
};

// ----- linking route groups ----- //

introductionRouteGroup.nextGroup = librariesRouteGroup;
librariesRouteGroup.prevGroup = introductionRouteGroup;
librariesRouteGroup.nextGroup = referenceRouteGroup;
referenceRouteGroup.prevGroup = librariesRouteGroup;

// ----- all doc route groups ----- //

export const docsRouteGroups: PageRouteGroup[] = [
	introductionRouteGroup,
	librariesRouteGroup,
	referenceRouteGroup,
];

// ----- main routes ----- //

export const mainRoutes: PageRoute[] = [
	{ name: "Docs", path: docsRouteGroups[0].routes[0].path },
	{ name: "Libraries", path: docsRouteGroups[1].routes[0].path },
	{ name: "Contributors", path: "/contributors" },
];
