import InlineCode from "../inline-code";

interface MethodReturnsProps {
	type: string | null;
	children?: React.ReactNode;
}

export default function MethodReturns(props: MethodReturnsProps) {
	return (
		<div className="space-y-1.5">
			<InlineCode>{props.type ?? "None"}</InlineCode>
			{props.children && <div className="pl-1.5 font-light">{props.children}</div>}
		</div>
	);
}
