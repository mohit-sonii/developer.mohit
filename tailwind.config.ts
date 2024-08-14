import type { Config } from "tailwindcss"

const colors = require("tailwindcss/colors");
const {
   default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme("colors"));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ":root": newVars,
   });
}

const config = {
   darkMode: ["class"],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   prefix: "",
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
            scroll: {
               to: {
                  transform: "translate(calc(-50% - 0.5rem))",
               },
            },
            meteor: {
               "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
               "70%": { opacity: "1" },
               "100%": {
                  transform: "rotate(215deg) translateX(-500px)",
                  opacity: "0",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            scroll:
               "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            "meteor-effect": "meteor 5s linear infinite",

         },
      },
   },
   plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config

export default config