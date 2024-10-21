interface MethodReturnsProps {
	type: string;
	children?: React.ReactNode;
}

export default function MethodReturns(props: MethodReturnsProps) {
	return (
		<div className="">
			<p>{props.type}</p>
			{props.children && <div>{props.children}</div>}
		</div>
	);
}
