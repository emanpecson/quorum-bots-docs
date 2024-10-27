import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { docsRouteGroups } from "@/data/routes";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div>
			<div className="w-full flex flex-col place-items-center sm:pt-40 pt-12 space-y-4 px-4">
				<div className="md:text-6xl sm:text-5xl text-2xl font-extrabold space-y-1 text-neutral-700 dark:text-neutral-200 text-center">
					<h1 className="text-nowrap">Empowering Everyone:</h1>
					<div className="flex justify-center place-items-center sm:space-x-2.5 space-x-1.5 flex-nowrap">
						<h1>Quorum</h1>
						<div>
							<XIcon className="md:block hidden" strokeWidth={3.5} size={32} />
							<XIcon className="hidden sm:block md:hidden" strokeWidth={3.5} size={28} />
							<XIcon className="sm:hidden block" strokeWidth={3} size={20} />
						</div>
						<h1 className="text-nowrap">LEGO SPIKE</h1>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<p className="text-center md:w-1/2 w-4/5 md:text-xl text-sm font-normal">
						Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis himenaeos bibendum placerat
						dictum ad aliquam. Gravida ultricies lobortis nostra rutrum ex.
					</p>
				</div>
				<div className="flex space-x-2 place-items-center">
					<Button className="rounded-xl" asChild>
						<Link href={docsRouteGroups[0].routes[0].path}>Visit Docs</Link>
					</Button>
					<Search placeholder="Quick search..." />
				</div>
			</div>
		</div>
	);
}
