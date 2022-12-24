/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7f7f7",
          secondary: "#1e1e1e",
          accent: "#d5cc16",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ]
  }
}
