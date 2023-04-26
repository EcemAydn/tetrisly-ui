/** @type {import('tailwindcss').Config} */
import globalColors from "./ui-color/global";
import semanticColors from "./ui-color/semantic";
import contentColors from "./ui-color/content";
import actionColors from "./ui-color/action";
import backgroundColors from "./ui-color/background";
import borderColors from "./ui-color/border";
import interactionColors from "./ui-color/interaction";
import nonContextualColors from "./ui-color/non-contextual";
import elevationShadow from "./ui-shadow/elevation";

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...globalColors,
        ...semanticColors,
        ...actionColors,
        ...backgroundColors,
        ...contentColors,
        ...borderColors,
        ...interactionColors,
        ...nonContextualColors,
      },
      boxShadow: {
        ...elevationShadow,
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
