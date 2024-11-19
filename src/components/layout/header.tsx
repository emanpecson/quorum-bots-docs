"use client";

import Image from "next/image";
import { ThemeToggle } from "../button/theme-toggle";
import Search from "../search";
import Link from "next/link";
import { quorumLogoUrl } from "@/data/url";
import NavMainRoutes from "../navigation/nav-main-routes";
import { metadata } from "@/data/metadata";
import GitHubButton from "../button/github-button";
import PanelButton from "../button/panel-button";

export default function Header() {
	return (
		<div className="h-16 w-full flex justify-center place-items-center fixed backdrop-blur-md top-0 px-4 bg-white dark:bg-neutral-800 bg-opacity-60 dark:bg-opacity-60 z-50">
			<div className="flex justify-between place-items-center w-full max-w-[86rem] space-x-3">
				{/* title + main routes */}
				<div className="w-fit">
					<div className="lg:block hidden">
						<div className="flex place-items-center space-x-10">
							<Link href={"/"} className="flex place-items-center space-x-3">
								<Image
									src={quorumLogoUrl}
									alt="Quorum logo"
									height={36}
									width={36}
									className="dark:invert"
								/>
								<h1 className="text-xl font-semibold text-nowrap">{metadata.title as string}</h1>
							</Link>

							<NavMainRoutes />
						</div>
					</div>

					{/* on shorter widths */}
					<div className="lg:hidden flex place-items-center">
						<PanelButton />
					</div>
				</div>

				{/* search + header buttons */}
				<div className="flex place-items-center space-x-4 w-full lg:w-fit justify-end">
					<Search />
					<ThemeToggle />
					<GitHubButton />
				</div>
			</div>
		</div>
	);
}
