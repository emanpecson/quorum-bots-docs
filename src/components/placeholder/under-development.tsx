import { ConstructionIcon } from "lucide-react";

export default function UnderDevelopment() {
	return (
		<div className="rounded-full px-4 py-1.5 bg-neutral-200 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300 w-fit">
			<div className="flex space-x-2 place-items-center">
				<ConstructionIcon size={20} />
				<span className="font-medium">Under development</span>
			</div>
		</div>
	);
}
