import { LinkIcon, RabbitIcon, SquareFunctionIcon } from "lucide-react";
import { quorumGithubUrl, quorumLanguageUrl, quorumStudioUrl } from "./url";
import type { PageRoute, PageRouteGroup } from "@/types/page-route";

// ----- defined docs route groups ----- //

const dpath = "/docs";
const introductionRouteGroup: PageRouteGroup = {
	label: "Introduction",
	Icon: RabbitIcon,
	routes: [
		{ name: "Overview", path: `${dpath}` },
		{ name: "Motivation", path: `${dpath}/motivation` },
		{ name: "Getting Started", path: `${dpath}/getting-started` },
	],
};

const lpath = `${dpath}/libraries`;
const librariesRouteGroup: PageRouteGroup = {
	label: "Libraries",
	Icon: SquareFunctionIcon,
	routes: [
		{ name: "Button", path: `${lpath}/button` },
		{ name: "Color", path: `${lpath}/color` },
		{ name: "ColorMatrix", path: `${lpath}/color-matrix` },
		{ name: "Device", path: `${lpath}/device` },
		{ name: "Display", path: `${lpath}/display` },
		{ name: "DistanceSensor", path: `${lpath}/distance-sensor` },
		{ name: "ForceSensor", path: `${lpath}/force-sensor` },
		{ name: "Hub", path: `${lpath}/hub` },
		{ name: "Light", path: `${lpath}/light` },
		{ name: "LightMatrix", path: `${lpath}/light-matrix` },
		{ name: "Motor", path: `${lpath}/motor` },
		{ name: "MotorPair", path: `${lpath}/motorpair` },
		{ name: "Music", path: `${lpath}/music` },
		{ name: "Port", path: `${lpath}/port` },
		{ name: "Sound", path: `${lpath}/sound` },
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
