/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        'my-cursor': 'url(/public/cursor.cur), default',
      },
      backgroundImage: {
        'bg-mary': "url('/bg-mary-pc.png')",
        'mary-md': "url('/mary-md.png')"
      },
      borderColor:{
        'discord': '	#7289da',
      }
      
    },
  },
  plugins: [],
};
