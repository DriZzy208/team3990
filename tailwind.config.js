/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': 'url("https://i.ibb.co/NpkK7Cn/bg-1.jpg")',
        'ima2': 'url("https://i.ibb.co/ScPqCLk/52029743025-9f23b0ff45-o.jpg")',
      }
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
