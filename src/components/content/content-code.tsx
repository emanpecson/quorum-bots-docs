"use client";

import { CodeBlock, dracula } from "react-code-blocks";

interface ContentCodeProps {
	code: string;
	label?: string;
	language?: string;
	showLineNumbers?: boolean;
}

// * reference: https://react-code-blocks-rajinwonderland.vercel.app/?path=/docs/codeblock--default

export default function ContentCode(props: ContentCodeProps) {
	// "ada": default syntax highlighting that closely resembles quorum
	const language = props.language ?? "ada";

	return (
		<div className="space-y-2.5">
			{props.label && <p className="text-normal font-medium pl-4">{props.label}</p>}
			<div className="rounded-3xl overflow-clip">
				<div className="overflow-hidden">
					<CodeBlock
						text={props.code}
						language={language}
						showLineNumbers={props.showLineNumbers ?? false}
						theme={dracula}
					/>
				</div>
			</div>
		</div>
	);
}
