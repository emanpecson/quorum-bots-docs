import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../ui/button";

interface PrevButtonProps {
	onClick: () => void;
	label: string;
}

export default function PrevButton(props: PrevButtonProps) {
	return (
		<Button variant={"outline"} className="font-medium flex" onClick={props.onClick}>
			<ChevronLeftIcon />
			<span>{props.label}</span>
		</Button>
	);
}
