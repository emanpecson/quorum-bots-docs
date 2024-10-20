import Image from "next/image";
import { ThemeToggle } from "../button/theme-toggle";
import Search from "../search";
import { metadata } from "@/app/layout";
import Link from "next/link";
import { mainRoutes, PageRoute } from "@/data/routes";
import { quorumLogoUrl } from "@/data/url";

export default function Header() {
	return (
		<div className="h-16 w-full border-b flex justify-center place-items-center fixed backdrop-blur-md top-0">
			<div className="flex justify-between place-items-center w-full max-w-[86rem]">
				{/* title + main routes */}
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

					<div className="flex space-x-4 place-items-center text-sm">
						{mainRoutes.map((route: PageRoute, i: number) => {
							return (
								<Link key={i} href={route.path}>
									{route.name}
								</Link>
							);
						})}
					</div>
				</div>

				{/* search + header buttons */}
				<div className="flex place-items-center space-x-4">
					<Search />
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
