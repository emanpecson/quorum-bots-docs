"use client";

import { useEffect, useState } from "react";
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
import { SearchIcon } from "lucide-react";

interface SearchProps {
	placeholder?: string;
	hideInPath?: string;
}

export default function Search(props: SearchProps) {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const isMac = navigator.userAgent.toLowerCase().includes("mac");

	const handleSelect = (route: string) => {
		setIsOpen(false);
		router.push(route);
	};

	useEffect(() => {
		// open if cmd/ctrl + k pressed
		const openSearch = (ev: KeyboardEvent) => {
			if ((ev.metaKey || ev.ctrlKey) && ev.key === "k") {
				ev.preventDefault();
				setIsOpen((open) => !open);
			}
		};

		// on key pressed, trigger this func
		document.addEventListener("keydown", openSearch);

		// cleanup event-listener on exit
		return () => document.removeEventListener("keydown", openSearch);
	});

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					variant={"outline"}
					size={"sm"}
					className="font-normal text-neutral-600 dark:text-neutral-400 rounded-xl px-4 relative h-11 space-x-4"
				>
					<div className="flex space-x-2.5 place-items-center">
						<SearchIcon className="text-neutral-500" />
						<span>{props.placeholder ?? "Search documentation..."}</span>
					</div>
					<kbd className="flex place-items-center space-x-0.5 border rounded-lg shadow-sm shadow-neutral-300 dark:shadow-neutral-800 px-2">
						{isMac ? (
							<span className="text-xl">⌘</span>
						) : (
							<span className="text-base pr-0.5">Ctrl</span>
						)}
						<span className="text-base">K</span>
					</kbd>
				</Button>
			</DialogTrigger>
			<DialogContent aria-describedby="search-docs" className="p-0">
				<DialogTitle className="hidden" />

				<Command>
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
