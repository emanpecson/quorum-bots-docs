import Image from "next/image";
import { ThemeToggle } from "../button/theme-toggle";
import Search from "../search";
import { metadata } from "@/app/layout";
import Link from "next/link";
import { headerNavs, Nav } from "@/data/routes";
import { usePathname } from "next/navigation";
const quorumLogoUrl =
	"https://quorumlanguage.com/media/userInterface/SVG/blackQuorumLogo.svg";

export default function Header() {
	return (
		<div className="flex justify-between h-16 border-b place-items-center px-8 w-full top-0 fixed backdrop-blur-md">
			<div className="flex place-items-center space-x-10">
				<Link href={"/"} className="flex place-items-center space-x-3">
					<Image
						src={quorumLogoUrl}
						alt="Quorum logo"
						height={36}
						width={36}
						className="dark:invert"
					/>
					<h1 className="text-lg font-medium text-nowrap">
						{metadata.title as string}
					</h1>
				</Link>

				<div className="flex space-x-4 place-items-center text-sm">
					{headerNavs.map((nav: Nav, i: number) => {
						return (
							<Link key={i} href={nav.route}>
								{nav.name}
							</Link>
						);
					})}
				</div>
			</div>

			<div className="flex place-items-center space-x-4">
				<Search />
				<ThemeToggle />
			</div>
		</div>
	);
}
