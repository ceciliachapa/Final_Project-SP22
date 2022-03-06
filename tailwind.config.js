module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {},
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
