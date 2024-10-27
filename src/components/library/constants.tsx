import { Constant } from "@/types/constant";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

interface ConstantsProps {
	constants: Constant[];
	hideSearch?: boolean;
}

export default function Constants(props: ConstantsProps) {
	const [search, setSearch] = useState("");
	const [filteredConstants, setFilteredConstants] = useState(props.constants);

	const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
		setSearch(ev.target.value);
	};

	const handleReset = () => {
		setFilteredConstants(props.constants);
		setSearch("");
	};

	const handleFilter = (c: Constant) => {
		if (!search) return true;
		const s = search.toLowerCase();
		return (
			c.identifier.toLowerCase().startsWith(s) ||
			c.value.toLowerCase().startsWith(s) ||
			c.type.toLowerCase().startsWith(s)
		);
	};

	useEffect(() => {
		setFilteredConstants(props.constants.filter(handleFilter));
	}, [search]);

	return (
		<div className="space-y-3.5">
			{!props.hideSearch && (
				<div className="flex space-x-2 place-items-center">
					<div className="relative">
						<SearchIcon className="absolute left-3 top-2.5 text-neutral-500" size={20} />
						<Input
							placeholder="Search constants..."
							className="w-fit rounded-xl pl-10"
							onChange={handleSearch}
							value={search}
						/>
					</div>
					<div className="flex place-items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400">
						<span>Results:</span>
						<span>{filteredConstants.length}</span>
					</div>
				</div>
			)}
			{filteredConstants.length > 0 ? (
				<ol className="flex flex-wrap gap-1.5">
					{filteredConstants.map((constant: Constant, i: number) => (
						<li key={i} className="rounded-full px-2 border">
							<div className="flex space-x-1 text-sm">
								{/* <span>{constant.type}</span> */}
								<span className="font-medium">{constant.identifier}</span>
								<span className="font-light">{"="}</span>
								<span className="font-light">{constant.value}</span>
							</div>
						</li>
					))}
				</ol>
			) : (
				<button
					onClick={handleReset}
					className="rounded-lg px-2 py-1.5 border hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-150"
				>
					<div className="flex space-x-1 text-sm">
						<span className="font-medium">No results.</span>
						<span className="font-light">Click to reset.</span>
					</div>
				</button>
			)}
		</div>
	);
}
