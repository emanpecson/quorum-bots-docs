import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { docsRouteGroups } from "@/data/routes";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div>
			<div className="w-full flex flex-col place-items-center pt-40 space-y-4">
				<div className="text-6xl font-extrabold space-y-1 text-neutral-700 dark:text-neutral-200">
					<h1>Empowering Everyone:</h1>
					<div className="flex justify-center place-items-center space-x-2.5">
						<h1>Quorum</h1>
						<XIcon strokeWidth={3.5} size={32} />
						<h1>LEGO SPIKE</h1>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<p className="text-center w-1/2 text-xl font-normal">
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
