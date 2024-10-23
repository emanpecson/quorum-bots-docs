import { MethodParam } from "@/types/method-param";
import InlineCode from "../inline-code";

interface MethodParamsProps {
	params: MethodParam[];
}

export default function MethodParams(props: MethodParamsProps) {
	return (
		<div>
			{props.params.length > 0 ? (
				<ol className="space-y-2">
					{props.params.map((param: MethodParam, i: number) => (
						<li key={i} className="space-y-1.5">
							<div className="space-x-1.5">
								<span>{i + 1}.</span>
								<InlineCode>
									<span>{param.type}</span>
									<span>{param.identifier}</span>
								</InlineCode>
							</div>
							{param.description && <p className="font-light pl-6">{param.description}</p>}
						</li>
					))}
				</ol>
			) : (
				<InlineCode>None</InlineCode>
			)}
		</div>
	);
}
