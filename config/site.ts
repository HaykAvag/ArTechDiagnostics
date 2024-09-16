export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ArTech Diagnostics",
  description:
    "Advanced driver assistance systems (ADAS) in modern cars from Honda, Toyota, Nissan, BMW, & Mercedes require specialized calibration once damaged. Let us help with that.",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
