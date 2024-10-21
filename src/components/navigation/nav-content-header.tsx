import { cn } from "@/lib/utils";
import { ContentHeaderType, ContentSubheaderType } from "@/types/content-header";
import { InViewMap } from "./nav-wrapper";

interface NavContentHeaderProps {
	header: ContentHeaderType;
	inViewMap: InViewMap;
}

export default function NavContentHeader(props: NavContentHeaderProps) {
	const jump = (id: string) => {
		const elem = document.getElementById(id);
		if (elem) elem.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="space-y-1">
			<button
				className={cn(
					props.inViewMap[props.header.id] ? "font-medium" : "font-light",
					"w-fit text-sm duration-150 transition-all"
				)}
				onClick={() => jump(props.header.id)}
			>
				{props.header.label}
			</button>

			<div className="space-y-1">
				{props.header.subheaders.length > 0 &&
					props.header.subheaders.map((subheader: ContentSubheaderType) => (
						<button
							key={subheader.id}
							className={cn(
								props.inViewMap[subheader.id] ? "font-medium" : "font-light",
								"w-fit text-sm pl-4 duration-150 transition-all"
							)}
							onClick={() => jump(subheader.id)}
						>
							{subheader.label}
						</button>
					))}
			</div>
		</div>
	);
}
