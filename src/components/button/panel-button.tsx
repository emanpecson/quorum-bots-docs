"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { metadata } from "@/data/metadata";
import { quorumLogoUrl } from "@/data/url";
import Image from "next/image";
import NavMainRoutes from "../navigation/nav-main-routes";
import NavPageRouteGroup from "../navigation/nav-page-route-group";
import { docsRouteGroups } from "@/data/routes";
import { PageRouteGroup } from "@/types/page-route";
import { useState } from "react";
import Link from "next/link";

export default function PanelButton() {
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		setIsOpen(false);
	};

	return (
		<Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
			<SheetTrigger asChild>
				<button>
					<MenuIcon />
				</button>
			</SheetTrigger>
			<SheetContent side={"left"} className="divide-y overflow-y-scroll space-y-4">
				<SheetHeader>
					<Link
						href={"/"}
						className="flex place-items-center sm:space-x-3 space-x-2 pb-4 sm:pt-0 pt-1.5"
						onClick={close}
					>
						<Image
							src={quorumLogoUrl}
							alt="Quorum logo"
							height={36}
							width={36}
							className="dark:invert sm:w-9 sm:h-9 w-6 h-6"
						/>
						<SheetTitle>
							<h1 className="sm:text-lg text-sm font-medium text-nowrap">
								{metadata.title as string}
							</h1>
						</SheetTitle>
					</Link>
				</SheetHeader>

				<div className="pt-4 space-y-4">
					<NavMainRoutes displayVertical onLinkClick={close} />
				</div>

				<div className="space-y-4 pt-4">
					{docsRouteGroups.map((group: PageRouteGroup, i: number) => (
						<NavPageRouteGroup group={group} key={i} onLinkClick={close} />
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
