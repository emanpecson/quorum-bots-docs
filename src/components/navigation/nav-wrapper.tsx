"use client";

import type { PageRoute, PageRouteGroup } from "@/types/page-route";
import NavPageRouteGroup from "./nav-page-route-group";
import { ContentHeaderType } from "@/types/content-header";
import { docsRouteGroups } from "@/data/routes";
import NavContentHeader from "./nav-content-header";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import NextButton from "../button/next-button";
import PrevButton from "../button/prev-button";

interface NavWrapperProps {
	children: React.ReactNode;
	title: string;
	description: string;
	headers: ContentHeaderType[];
}

export type InViewMap = { [id: string]: boolean };

export default function NavWrapper(props: NavWrapperProps) {
	const router = useRouter();
	const pathname = usePathname();
	const [inViewMap, setInViewMap] = useState<InViewMap>({});
	const [prevRoute, setPrevRoute] = useState<PageRoute | null>(null);
	const [nextRoute, setNextRoute] = useState<PageRoute | null>(null);

	// trigger when a header leaves the view: updates the map of headers-in-view
	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		for (const entry of entries) {
			setInViewMap((prevMap) => ({ ...prevMap, [entry.target.id]: entry.isIntersecting }));
		}
	};

	// define + handle observer
	useEffect(() => {
		const root = null; // define document as observable bounds
		const threshold = 0.25; // a value from 0.0-1.0, where 0.25 means 25% of elem is considered "in-view"
		const observer = new IntersectionObserver(observerCallback, { root, threshold });

		// let all headers/subheaders be tracked by observer
		for (const header of props.headers) {
			if (header.ref?.current) observer.observe(header.ref.current);
			for (const subheader of header.subheaders) {
				if (subheader.ref?.current) observer.observe(subheader.ref.current);
			}
		}

		return () => {
			// cleanup observer on exit
			for (const header of props.headers) {
				if (header.ref?.current) observer.unobserve(header.ref.current);
				for (const subheader of header.subheaders) {
					if (subheader.ref?.current) observer.unobserve(subheader.ref.current);
				}
			}
			observer.disconnect();
		};
	}, [props.headers]);

	const getPrevRoute = (routeGroup: PageRouteGroup, currIndex: number): PageRoute | null => {
		// return prev route if it exists
		if (currIndex - 1 >= 0) {
			return routeGroup.routes[currIndex - 1];
		}
		// otherwise, at start, return last route of prev group
		if (routeGroup.prevGroup) {
			const lastIndex = routeGroup.prevGroup.routes.length - 1;
			return routeGroup.prevGroup.routes[lastIndex];
		}
		// otherwise, no prev route
		return null;
	};

	const getNextRoute = (routeGroup: PageRouteGroup, currIndex: number): PageRoute | null => {
		// return next route if it exists
		if (currIndex + 1 < routeGroup.routes.length) {
			return routeGroup.routes[currIndex + 1];
		}
		// otherwise, at end, return first route of next group
		if (routeGroup.nextGroup) {
			return routeGroup.nextGroup.routes[0];
		}
		// otherwise, no next route
		return null;
	};

	// define prev/next routes
	useEffect(() => {
		docsRouteGroups.forEach((routeGroup) => {
			routeGroup.routes.forEach((route, i) => {
				if (route.path === pathname) {
					setPrevRoute(getPrevRoute(routeGroup, i));
					setNextRoute(getNextRoute(routeGroup, i));
				}
			});
		});
	}, [pathname]);

	return (
		<div className="flex h-screen pt-16">
			<div className="w-80 overflow-y-auto pb-16 px-8 pt-4 space-y-4">
				{docsRouteGroups.map((group: PageRouteGroup, i: number) => (
					<NavPageRouteGroup group={group} key={i} />
				))}
			</div>
			<div className="overflow-y-auto w-full px-16 pt-3.5 pb-16">
				<h1 className="text-3xl font-semibold">{props.title}</h1>
				<p className="w-2/3 text-neutral-500 font-light pt-2">{props.description}</p>
				<div className="pt-10">{props.children}</div>
				<div className="flex pt-16">
					<div className="flex justify-start w-1/2">
						{prevRoute && (
							<PrevButton onClick={() => router.push(prevRoute.path)} label={prevRoute.name} />
						)}
					</div>
					<div className="flex justify-end w-1/2">
						{nextRoute && (
							<NextButton onClick={() => router.push(nextRoute.path)} label={nextRoute.name} />
						)}
					</div>
				</div>
			</div>
			<div className="w-80 overflow-y-auto pb-16 pt-4 px-8 space-y-4">
				<p className="text-xs font-semibold uppercase">On this page</p>
				<div className="flex flex-col space-y-2">
					{props.headers.map((header: ContentHeaderType) => (
						<NavContentHeader header={header} key={header.id} inViewMap={inViewMap} />
					))}
				</div>
			</div>
		</div>
	);
}
