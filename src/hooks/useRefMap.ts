import { useMemo, useRef } from "react";

type RefMap = {
	[key in string]: React.RefObject<HTMLDivElement | null>;
};

/**
 * useRefMap
 * Takes an array of strings (@param refNames) to dynamically define a list
 * of refs from each ref name.
 *
 * @param refNames
 * @returns map: (key: ref name -> value: ref object)
 */
export const useRefMap = (refNames: string[]) => {
	const map: RefMap = {};

	// map each name
	for (const name of refNames) {
		map[name] = useRef<HTMLDivElement | null>(null);
	}
	return map;
};
