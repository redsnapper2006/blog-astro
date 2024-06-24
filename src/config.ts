import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Yan Du",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Red Snapper/赤鯛/红鲷",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/redsnapper2006",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:red.snapper@qq.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://x.com/goldenarmor2006",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/redsnapper2006",
    linkTitle: `${SITE.title} on GitLab`,
    active: true,
  },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
];
