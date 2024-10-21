import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";

interface NextButtonProps {
	onClick: () => void;
	label: string;
}

export default function NextButton(props: NextButtonProps) {
	return (
		<Button variant={"outline"} className="font-medium flex" onClick={props.onClick}>
			<span>{props.label}</span>
			<ChevronRightIcon />
		</Button>
	);
}
