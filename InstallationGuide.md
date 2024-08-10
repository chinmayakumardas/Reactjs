<b><a>1.React Installation:</a></b> 
npx create-react-app “project-name”  
 or    
npm create vite@latest

Run:
npm run start or npm run dev

Build:
npm run build
<b><a>2.Tailwind Installation: </a></b>>
First  install this :

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

Then add this in tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add this code In index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

<a><b>Run The React App:</b></a>
npm run dev
