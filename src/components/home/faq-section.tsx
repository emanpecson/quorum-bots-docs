import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FAQSection() {
	return (
		<div className="w-full flex flex-col place-items-center space-y-8">
			<h2 className="font-extrabold md:text-4xl text-3xl text-neutral-700 dark:text-neutral-300">
				Frequently asked questions
			</h2>

			<Accordion type="single" collapsible className="md:w-[32rem] w-full space-y-2">
				<AccordionItem value="item-1" className="px-4 rounded-lg border-2">
					<AccordionTrigger>What is Quorum?</AccordionTrigger>
					<AccordionContent>
						Quorum is a programming language that uses research evidence as the base of its
						accessible-friendly design. It is especially helpful towards visually-impaired users,
						but can be used by any type of user that wants to learn about the engineering field.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="px-4 rounded-lg border-2">
					<AccordionTrigger>What is LEGO SPIKE?</AccordionTrigger>
					<AccordionContent>
						LEGO SPIKE is an interactive robotics kit that is designed to introduce students to the
						engineering field.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="px-4 rounded-lg border-2">
					<AccordionTrigger>What is this website for?</AccordionTrigger>
					<AccordionContent>
						This website provides a comprehensive reference to all of the LEGO SPIKE libraries that
						can be used in Quorum. It provides developers with a guide to each library and how to
						use its functionalities.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
