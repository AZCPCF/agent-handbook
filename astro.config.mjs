import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// SITE / BASE are injected by the GitHub Actions workflow.
// Locally they fall back to http://localhost:4321/
export default defineConfig({
  site: process.env.SITE || "http://localhost:4321",
  base: process.env.BASE || "/",
  integrations: [
    starlight({
      title: {
        fa: "کتاب Agent Engineering",
        en: "Agent Engineering Handbook",
      },
      defaultLocale: "root",
      locales: {
        root: { label: "فارسی", lang: "fa", dir: "rtl" },
        en: { label: "English", lang: "en" },
      },
      customCss: ["./src/styles/custom.css"],
      // Light / dark theme switcher is built into Starlight (Auto / Light / Dark).
      sidebar: [
        {
          label: "روز ۱ · مبانی و معماری Agent",
          translations: { en: "Day 1 · Agent Fundamentals & Architecture" },
          items: [{ autogenerate: { directory: "day-1" } }],
        },

        // Day 2..7: add one folder per day, e.g. { label: '...', autogenerate: { directory: 'day-2' } }
      ],
    }),
  ],
});
