import type { Config } from "tailwindcss";

/**
 * Tailwind v4 is CSS-first: `@import "tailwindcss"` in `app/globals.css` drives the build.
 * Custom keyframes and utilities (`animate-fade-up`, `motion-*`, delays, etc.) are defined
 * there with `:root` motion tokens. Extend this file when you need JS-configured theme only.
 */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
} satisfies Config;
