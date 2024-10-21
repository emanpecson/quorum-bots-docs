import { MethodParam } from "@/types/method-param";

interface MethodParamsProps {
	params: MethodParam[];
}

export default function MethodParams(props: MethodParamsProps) {
	return (
		<div>
			{props.params.length > 0 ? (
				<ol>
					{props.params.map((param: MethodParam, i: number) => (
						<li key={i}>
							<div className="space-x-1">
								<span>{param.type}</span>
								<span>{param.identifier}</span>
							</div>
							{param.description && <p>{param.description}</p>}
						</li>
					))}
				</ol>
			) : (
				<p>None</p>
			)}
		</div>
	);
}
