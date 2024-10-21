import { MutableRefObject } from "react";

export type ContentHeaderType = {
	id: string;
	label: string;
	subheaders: ContentSubheaderType[];
	ref: MutableRefObject<HTMLDivElement | null>;
};

export type ContentSubheaderType = {
	id: string;
	label: string;
	ref: MutableRefObject<HTMLDivElement | null>;
};
