import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [scrollbarHide, lineClamp],
};

export default config;
