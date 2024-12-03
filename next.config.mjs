/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "media.licdn.com",
			},
			{
				protocol: "https",
				hostname: "quorumlanguage.com",
			},
			{
				protocol: "https",
				hostname: "www.unlv.edu",
			},
		],
	},
};

export default nextConfig;
