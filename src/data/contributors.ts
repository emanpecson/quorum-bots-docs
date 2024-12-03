import { LucideIcon, MailIcon, UserCircle2Icon } from "lucide-react";

const email = "mailto:";

export interface Contributor {
	name: string;
	imageSrc: string;
	roles: Role[];
	socials: Social[];
}

export interface Social {
	label: string;
	url: string;
	imageSrc: string | LucideIcon;
}

enum Role {
	// * contributed to integrating LEGO-SPIKE libs/classes into the quorum langauge
	API_DEV = "API developer",
	// * primary point-of-contact for api
	LEAD_API_DEV = "Lead API developer",

	// * contributed to website
	WEB_DEV = "Web developer",
	// * primary point-of-contact for website
	LEAD_WEB_DEV = "Lead web developer",

	// * conduct manual/automatic testing on quorum side or website
	QA = "Quality assurance",

	// * contributed to ui/ux design
	UI_UX_DESIGN = "UI/UX designer",

	// * contributed to design portfolio or wrote user-guides
	TECH_WRITER = "Technical writer",

	// * conducted interviews
	USER_STUDY = "User study",

	// * create quorum
	CREATOR = "Creator of Quorum",
}

export const contributors: Contributor[] = [
	{
		name: "Bret Benjegerdes",
		imageSrc: "https://avatars.githubusercontent.com/u/64377038?v=4",
		roles: [Role.LEAD_API_DEV, Role.QA, Role.USER_STUDY, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/Bret-B", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}benjeger@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Zachary Wylie",
		imageSrc: "https://avatars.githubusercontent.com/u/167380685?v=4",
		roles: [Role.LEAD_API_DEV, Role.QA, Role.USER_STUDY, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/wyliez1", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}wyliez1@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Emanuel Pecson",
		imageSrc: "/images/lego-eman.png",
		roles: [Role.LEAD_WEB_DEV, Role.UI_UX_DESIGN, Role.TECH_WRITER],
		socials: [
			{ label: "Portfolio", url: "https://emanpecson.com", imageSrc: UserCircle2Icon },
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/emanuel-pecson/",
				imageSrc: "/icons/linkedin.png",
			},
			{ label: "GitHub", url: "https://github.com/emanpecson", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}emanpecson@gmail.com`, imageSrc: MailIcon },
		],
	},
	{
		name: "William Luong",
		imageSrc: "https://avatars.githubusercontent.com/u/104801443?v=4",
		roles: [Role.API_DEV, Role.UI_UX_DESIGN, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/WilliamL10", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}luongw1@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Daniela Pedraza Orenday",
		imageSrc: "https://avatars.githubusercontent.com/u/180346940?v=4",
		roles: [Role.API_DEV, Role.WEB_DEV, Role.TECH_WRITER],
		socials: [
			{
				label: "GitHub",
				url: "https://github.com/DanielaPedraza1",
				imageSrc: "/icons/github.svg",
			},
			{ label: "Email", url: `${email}pedrazao@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Anh Kiet Cong",
		imageSrc: "https://avatars.githubusercontent.com/u/98198302?v=4",
		roles: [Role.API_DEV, Role.WEB_DEV, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/anhcong0901", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}conga1@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Ernesto Dones Sierra",
		imageSrc: "https://avatars.githubusercontent.com/u/185986147?v=4",
		roles: [Role.API_DEV, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/donessie94", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}donessie@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Dr. Andreas Stefik",
		imageSrc:
			"https://www.unlv.edu/sites/default/files/styles/450_width/public/media/image/2024-09/Andreas-Stefik.JPG?itok=7DGD2qOo",
		roles: [Role.CREATOR],
		socials: [
			{
				label: "Portfolio",
				url: "https://web.cs.unlv.edu/stefika/index.html",
				imageSrc: UserCircle2Icon,
			},
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/stefika/",
				imageSrc: "/icons/linkedin.png",
			},
			{ label: "GitHub", url: "https://github.com/andreas-stefik", imageSrc: "/icons/github.svg" },
			{ label: "Email", url: `${email}andreas.stefik@unlv.edu`, imageSrc: MailIcon },
		],
	},
];
