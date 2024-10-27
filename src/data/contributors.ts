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

	// * contributed to ui/ux design
	UI_UX_DESIGN = "UI/UX designer",

	// * conducted a code review (via pull request)
	CODE_REVIEW = "Code reviewer",

	// * contributed to design portfolio or wrote user-guides
	TECH_WRITER = "Technical writer",

	// * create quorum
	CREATOR = "Creator of Quorum",
}

export const contributors: Contributor[] = [
	{
		name: "Bret Benjegerdes",
		imageSrc: "https://avatars.githubusercontent.com/u/64377038?v=4",
		roles: [Role.LEAD_API_DEV, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/Bret-B", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}benjeger@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Zachary Wylie",
		imageSrc: "https://avatars.githubusercontent.com/u/167380685?v=4",
		roles: [Role.LEAD_API_DEV, Role.CODE_REVIEW, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/wyliez1", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}wyliez1@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Emanuel Pecson",
		imageSrc:
			// "https://media.licdn.com/dms/image/v2/C5603AQEQSnQC_RD5OA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1647145780595?e=1735171200&v=beta&t=dXjp8MI8UGF7PEDjAF1QoyTCtIl4W6dIBQ97ngOgV8I",
			"/profile/lego-eman.png",
		roles: [Role.LEAD_WEB_DEV, Role.UI_UX_DESIGN, Role.CODE_REVIEW, Role.TECH_WRITER],
		socials: [
			{ label: "Portfolio", url: "https://emanpecson.com", imageSrc: UserCircle2Icon },
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/emanuel-pecson/",
				imageSrc: "/icon/linkedin.png",
			},
			{ label: "GitHub", url: "https://github.com/emanpecson", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}emanpecson@gmail.com`, imageSrc: MailIcon },
		],
	},
	{
		name: "William Luong",
		imageSrc: "https://avatars.githubusercontent.com/u/104801443?v=4",
		roles: [Role.API_DEV, Role.UI_UX_DESIGN, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/WilliamL10", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}luongw1@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Daniela Pedraza Orenday",
		imageSrc: "https://avatars.githubusercontent.com/u/180346940?v=4",
		roles: [Role.WEB_DEV, Role.TECH_WRITER],
		socials: [
			{
				label: "GitHub",
				url: "https://github.com/DanielaPedraza1",
				imageSrc: "/icon/github.svg",
			},
			{ label: "Email", url: `${email}pedrazao@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Anh Kiet Cong",
		imageSrc: "https://avatars.githubusercontent.com/u/98198302?v=4",
		roles: [Role.WEB_DEV, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/anhcong0901", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}conga1@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Ernesto Dones Sierra",
		imageSrc: "https://avatars.githubusercontent.com/u/185986147?v=4",
		roles: [Role.API_DEV, Role.TECH_WRITER],
		socials: [
			{ label: "GitHub", url: "https://github.com/donessie94", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}donessie@unlv.nevada.edu`, imageSrc: MailIcon },
		],
	},
	{
		name: "Dr. Andreas Stefik",
		imageSrc: "https://web.cs.unlv.edu/stefika/media/me.jpg",
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
				imageSrc: "/icon/linkedin.png",
			},
			{ label: "GitHub", url: "https://github.com/andreas-stefik", imageSrc: "/icon/github.svg" },
			{ label: "Email", url: `${email}andreas.stefik@unlv.edu`, imageSrc: MailIcon },
		],
	},
];
