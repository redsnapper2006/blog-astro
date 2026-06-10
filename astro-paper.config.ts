import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://red-snapper.pages.dev/",
    title: "Red Snapper",
    description: "",
    author: "Yan Du",
    lang: "en",
    timezone: "Asia/ShangHai",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    showBackButton: true,
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/redsnapper2006" },
    { name: "x", url: "https://x.com/goldenarmor2006" },
    { name: "mail", url: "mailto:red.snapper@foxmail.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
