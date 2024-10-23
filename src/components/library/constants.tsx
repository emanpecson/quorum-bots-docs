import { Constant } from "@/types/constant";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface ConstantsProps {
	constants: Constant[];
}

export default function Constants(props: ConstantsProps) {
	const [search, setSearch] = useState("");

	const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
		setSearch(ev.target.value);
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

	return (
		<div className="space-y-3.5">
			<div className="flex space-x-2 place-items-center">
				<div className="relative">
					<SearchIcon className="absolute left-3 top-2.5 text-neutral-500" size={20} />
					<Input
						placeholder="Search constants..."
						className="w-fit rounded-xl pl-10"
						onChange={handleSearch}
					/>
				</div>
				<div className="flex place-items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400">
					<span>Results:</span>
					<span>{props.constants.filter(handleFilter).length}</span>
				</div>
			</div>
			<ol className="flex flex-wrap gap-1.5">
				{props.constants.filter(handleFilter).map((constant: Constant, i: number) => (
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
		</div>
	);
}
