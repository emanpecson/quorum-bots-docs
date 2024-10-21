import { Constant } from "@/types/constant";

interface ConstantsProps {
	constants: Constant[];
}

export default function Constants(props: ConstantsProps) {
	return (
		<ol>
			{props.constants.map((constant: Constant, i: number) => (
				<li key={i} className="flex space-x-1">
					<span>{constant.type}</span>
					<span className="font-medium">{constant.identifier}</span>
					<span>{"="}</span>
					<span>{constant.value}</span>
				</li>
			))}
		</ol>
	);
}
