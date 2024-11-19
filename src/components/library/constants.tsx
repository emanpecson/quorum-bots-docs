import { Constant } from "@/types/constant";
import { Button } from "../ui/button";
import { useState } from "react";
import InlineCode from "../inline-code";

interface ConstantsProps {
	constants: Constant[];
	maxVisible?: number;
}

export default function Constants(props: ConstantsProps) {
	const [isShowingMore, setIsShowingMore] = useState(false);
	const maxVisible = props.maxVisible ?? 10;
	const promptShowMore = props.constants.length > maxVisible;

	const toggleVisibility = () => {
		setIsShowingMore(!isShowingMore);
	};

	return (
		<div className="space-y-3.5">
			<ol className="flex flex-wrap gap-1.5">
				{props.constants.map(
					(constant: Constant, i: number) =>
						(isShowingMore || i < maxVisible) && (
							<li key={i}>
								<InlineCode>
									<span className="font-medium">{constant.identifier}</span>
									<span className="font-light">{"="}</span>
									<span className="font-light">{constant.value}</span>
								</InlineCode>
							</li>
						)
				)}
				{promptShowMore && !isShowingMore && (
					<button onClick={toggleVisibility}>
						<InlineCode>...</InlineCode>
					</button>
				)}
			</ol>
			{promptShowMore && (
				<Button size="sm" variant="outline" onClick={toggleVisibility}>
					{isShowingMore ? "Show less" : `Show ${props.constants.length - maxVisible} more`}
				</Button>
			)}
		</div>
	);
}
