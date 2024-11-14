import { LucideIcon } from "lucide-react";

interface FeatureInfoProps {
	Icon: LucideIcon;
	label: string;
	description: string;
}

export default function FeatureInfo(props: FeatureInfoProps) {
	return (
		<div className="lg:w-full md:w-[36rem] w-full p-2 space-y-1.5">
			<div className="h-16 w-16 p-1 rounded-full flex justify-center place-items-center bg-neutral-200 dark:bg-neutral-800">
				<props.Icon size={30} className="text-neutral-600 dark:text-neutral-400" />
			</div>
			<h3 className="font-medium text-xl">{props.label}</h3>
			<p className="font-light text-lg">{props.description}</p>
		</div>
	);
}
