/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': 'url("https://i.ibb.co/NpkK7Cn/bg-1.jpg")',
        'ima2': 'url("https://www.team3990.com/wp-content/uploads/2017/08/21556923_10154616737675566_1187701955_o.jpg")',
        'ima3': 'url("https://www.team3990.com/wp-content/uploads/2017/08/21556923_10154616737675566_1187701955_o.jpg")',
        'banner1': 'url("https://www.team3990.com/wp-content/uploads/2017/08/infiniterecharge-290x300.png")',
        'banner2': 'url("https://www.team3990.com/wp-content/uploads/2017/08/logoetbannieres2019-1-291x300.png")',
        'banner3': 'url("https://www.team3990.com/wp-content/uploads/2017/08/2018Banner.png")',
        'banner4': 'url("https://www.team3990.com/wp-content/uploads/2017/08/game2017.png")',
        'banner5': 'url("https://www.team3990.com/wp-content/uploads/2017/08/game2016-1.png")',
        'banner6': 'url("https://www.team3990.com/wp-content/uploads/2017/08/game2017-1.png")',
        'banner7': 'url("https://www.team3990.com/wp-content/uploads/2017/08/game2014-1.png")',
        'banner8': 'url("https://www.team3990.com/wp-content/uploads/2017/08/game2017-2.png")',
        'banner9': 'url("https://www.team3990.com/wp-content/uploads/2017/08/game2012.png")',

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
