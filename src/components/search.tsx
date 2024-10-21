"use client";

import { useState } from "react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./ui/command";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import type { PageRoute, PageRouteGroup } from "@/types/page-route";
import { docsRouteGroups } from "@/data/routes";

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
							{docsRouteGroups.map((sec: PageRouteGroup, i: number) => (
								<div key={i}>
									{sec.routes.map((route: PageRoute, j: number) => (
										<CommandItem
											key={j}
											value={route.name}
											onSelect={() => handleSelect(route.path)}
										>
											<Link href={route.path} className="flex space-x-2 w-full text-neutral-600">
												<sec.Icon size={20} />
												<p>{route.name}</p>
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
