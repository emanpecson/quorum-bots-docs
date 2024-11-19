import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { docsRouteGroups } from "@/data/routes";
import Search from "../search";
import BlurFade from "../ui/blur-fade";

export default function HeroSection() {
	const delay = 0.1;
	const blurFadeProps = {
		blur: "0px",
		duration: 0.5,
		yOffset: -4,
	};

	return (
		<div className="w-full flex flex-col place-items-center space-y-4 px-4">
			<BlurFade delay={delay} {...blurFadeProps}>
				<div className="lg:text-7xl sm:text-5xl text-3xl font-extrabold space-y-1 text-neutral-700 dark:text-neutral-200 text-center">
					<h1 className="text-nowrap">Empowering Everyone:</h1>
					<div className="flex justify-center place-items-center sm:space-x-2.5 space-x-1.5 flex-nowrap">
						<h1>Quorum</h1>
						<div>
							<XIcon className="md:block hidden" strokeWidth={6} size={32} />
							<XIcon className="hidden sm:block md:hidden" strokeWidth={5} size={28} />
							<XIcon className="sm:hidden block" strokeWidth={4} size={20} />
						</div>
						<h1 className="text-nowrap">LEGO SPIKE</h1>
					</div>
				</div>
			</BlurFade>
			<BlurFade delay={delay * 2} {...blurFadeProps}>
				<div className="w-full flex justify-center">
					<p className="text-center md:w-1/2 w-4/5 md:text-xl text-base font-normal">
						{`Develop software for your LEGO SPIKE robots using Quorum's accessible-friendly functionalities.`}
					</p>
				</div>
			</BlurFade>
			<BlurFade delay={delay * 3} {...blurFadeProps}>
				<div className="flex space-x-2 place-items-center">
					<Button className="rounded-xl" asChild>
						<Link href={docsRouteGroups[0].routes[0].path}>Browse docs</Link>
					</Button>
					<Search placeholder="Quick search..." />
				</div>
			</BlurFade>
		</div>
	);
}
