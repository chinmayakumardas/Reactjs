<h2><b>[**1. React Installation:**]</b></h2>
<p>npx create-react-app “project-name”<br>
or<br>  
npm create vite@latest</p>

<p>Run:<br>
npm run start or npm run dev</p>

<p>Build:<br>
npm run build</p>

<h2><a style="color: blue;"><b>2. Tailwind Installation:</b></a></h2>
<p>First install this:</p>
<pre>npm install -D tailwindcss postcss autoprefixer</pre>

[**Tailwind-Installation**](https://github.com/chinmayakumardas/Reactjs/)
<pre>npx tailwindcss init -p</pre>

<p>Then add this in <code>tailwind.config.js</code>:</p>
<pre><code>/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>

<p>Add this code in <code>index.css</code>:</p>
<pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>


