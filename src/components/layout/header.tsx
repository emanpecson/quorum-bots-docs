"use client";

import Image from "next/image";
import { ThemeToggle } from "../button/theme-toggle";
import Search from "../search";
import Link from "next/link";
import { quorumLogoUrl } from "@/data/url";
import NavMainRoutes from "../navigation/nav-main-routes";
import { usePathname } from "next/navigation";
import { metadata } from "@/data/metadata";
import GitHubButton from "../button/github-button";
import PanelButton from "../button/panel-button";

export default function Header() {
	const pathname = usePathname();

	return (
		<div className="h-16 w-full border-b flex justify-center place-items-center fixed backdrop-blur-md top-0 px-4 z-50">
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
								<h1 className="text-lg font-medium text-nowrap">{metadata.title as string}</h1>
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
					{pathname !== "/" && <Search />}
					<ThemeToggle />
					<GitHubButton />
				</div>
			</div>
		</div>
	);
}
