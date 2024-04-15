/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#f40095",
                   
          "secondary": "#00cff2",
                   
          "accent": "#b30000",
                   
          "neutral": "#01050a",
                   
          "base-100": "#fffff0",
                   
          "info": "#00c4ff",
                   
          "success": "#00f7b3",
                   
          "warning": "#d19900",
                   
          "error": "#ff7a86",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}