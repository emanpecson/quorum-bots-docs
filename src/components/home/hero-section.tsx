import { Button } from "../ui/button";
import Link from "next/link";
import { docsRouteGroups } from "@/data/routes";
import Search from "../search";
import BlurFade from "../ui/blur-fade";

export default function HeroSection() {
	const delay = 0.1;
	const blurFadeProps = { blur: "0px", duration: 0.5, yOffset: -4 };

	return (
		<div className="w-full flex flex-col lg:place-items-end place-items-center space-y-4 px-4">
			{/* title section */}
			<BlurFade delay={delay} {...blurFadeProps}>
				<div className="lg:text-6xl md:text-5xl text-3xl font-extrabold space-y-1 text-onyx dark:text-neutral-100 flex lg:justify-end lg:text-right justify-center text-center">
					<h1 className="lg:w-full w-2/3">Empowering Everyone: Quorum and LEGO® SPIKE™</h1>
				</div>
			</BlurFade>

			{/* subtitle section */}
			<BlurFade delay={delay * 2} {...blurFadeProps}>
				<div className="w-full flex lg:justify-end justify-center">
					<p className="lg:text-right text-center w-4/5 md:text-xl text-base font-normal text-onyx dark:text-neutral-200">
						{`Develop software for your LEGO® SPIKE™ robots using Quorum's accessible-friendly functionalities.`}
					</p>
				</div>
			</BlurFade>

			{/* actions */}
			<BlurFade delay={delay * 3} {...blurFadeProps}>
				<div className="flex space-x-2 place-items-center">
					<Button className="rounded-xl" asChild>
						<Link href={docsRouteGroups[0].routes[0].path}>Browse docs</Link>
					</Button>
					<Search placeholder="Quick search..." disableKeyboardAccess />
				</div>
			</BlurFade>
		</div>
	);
}
