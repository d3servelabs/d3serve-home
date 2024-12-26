const URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true, // (optional)
};
