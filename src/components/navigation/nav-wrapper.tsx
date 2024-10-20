"use client";

import PageRouteGroup from "./page-route-group";
import { PageRouteGroup as PageRouteGroupType, docsRouteGroups } from "@/data/routes";
import { ContentHeaderType } from "@/types/content-header";

interface NavWrapperProps {
	children: React.ReactNode;
	title: string;
	headers: ContentHeaderType[];
}

export default function NavWrapper(props: NavWrapperProps) {
	return (
		<div className="flex h-screen pt-16">
			<div className="w-80 overflow-y-auto pb-16">
				{docsRouteGroups.map((group: PageRouteGroupType, i: number) => (
					<PageRouteGroup group={group} key={i} />
				))}
			</div>
			<div className="overflow-y-auto w-full px-4 pt-3.5">
				<h1>{props.title}</h1>
				<div>{props.children}</div>
			</div>
			<div className="w-80 overflow-y-auto pb-16">
				<h2>On this page</h2>
				{props.headers.map((header: ContentHeaderType) => (
					<p key={header.id}>{header.label}</p>
				))}
			</div>
		</div>
	);
}
