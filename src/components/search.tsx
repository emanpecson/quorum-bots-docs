"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./ui/command";
import { Nav, NavSection, navSections } from "@/data/routes";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Search() {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (route: string) => {
		setIsOpen(false);
		router.push(route);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					variant={"outline"}
					size={"sm"}
					className="font-normal text-neutral-600 dark:text-neutral-400 rounded-xl px-4"
				>
					Search documentation...
				</Button>
			</DialogTrigger>
			<DialogContent aria-describedby="search-docs" className="p-0">
				<DialogTitle className="hidden" />
				{/* <DialogDescription>Enter a page to search</DialogDescription> */}

				<Command>
					{/* <SearchIcon className="absolute left-2 top-2 text-neutral-400" /> */}
					{/* <Input onChange={(ev) => setInput(ev.target.value)} className="pl-10" /> */}
					<CommandInput placeholder="Search doucmentation..." />
					<CommandList>
						<CommandEmpty>No page found</CommandEmpty>
						<CommandGroup>
							{navSections.map((sec: NavSection, i: number) => (
								<div key={i}>
									{sec.navs.map((nav: Nav, j: number) => (
										<CommandItem
											key={j}
											value={nav.name}
											onSelect={() => handleSelect(nav.route)}
										>
											<Link
												href={nav.route}
												className="flex space-x-2 w-full text-neutral-600"
											>
												<sec.Icon size={20} />
												<p>{nav.name}</p>
											</Link>
										</CommandItem>
									))}
								</div>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	);
}
