/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/modules/**/*.{html,js,ts,tsx}",
    "./lib/pages/**/*.{html,js,ts,tsx}",
    "./lib/components/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ShadowGreen: "0 14px 32px rgba(64, 201, 162, 0.20000000298023224)",
        ShadowPurple: "0 14px 32px rgba(121, 71, 247, 0.10000000149011612)",
        CardShadowSmall: "0 14px 32px rgba(0, 0, 0, 0.10000000149011612)",
        CardShadowMedium: "0 32px 44px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      display: ["Inter"],
      body: ["Roboto"],
    },
    screens: {
      touch: { raw: "(hover:none)" },
      small: "450px",
      medium: "768px",
      large: "1280px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "Grey/900": "#101010",
      "Grey/800": "#2c2c2c",
      "Grey/700": "#484848",
      "Grey/600": "#646464",
      "Grey/500": "#808080",
      "Grey/400": "#9a9a9a",
      "Grey/300": "#b3b3b3",
      "Grey/200": "#cccccc",
      "Grey/100": "#e6e6e6",
      "Grey/050": "#f3f3f3",
      "mint/500": "#a3f7b5",
      "Teal/500": "#40c9a2",
      "Nyanza/500": "#e5f9e0",
      "Voilet/900": "#321054",
      "Voilet/800": "#441672",
      "Voilet/700": "#561c8f",
      "Voilet/600": "#6822ad",
      "Voilet/500": "#7a28cb",
      "Voilet/400": "#893ad8",
      "Voilet/300": "#9953dd",
      "Voilet/200": "#a86de2",
      "Voilet/100": "#b786e7",
      "Voilet/050": "#bf93ea",
      "PurpleNavy/900": "#121021",
      "PurpleNavy/800": "#1e1936",
      "PurpleNavy/700": "#29234a",
      "PurpleNavy/600": "#352d5f",
      "PurpleNavy/500": "#403774",
      "PurpleNavy/400": "#4a3f85",
      "PurpleNavy/300": "#534797",
      "PurpleNavy/200": "#5d50a8",
      "PurpleNavy/100": "#6b5eb3",
      "PurpleNavy/050": "#7367b7",
      "DarkPurple/800": "#0b0b0f",
      "DarkPurple/700": "#121118",
      "DarkPurple/600": "#201d2a",
      "DarkPurple/500": "#2e2a3c",
      "DarkPurple/400": "#39354b",
      "DarkPurple/300": "#453f5a",
      "DarkPurple/200": "#504a69",
      "DarkPurple/100": "#564f71",
    },
  },
  plugins: [],
};
