[**<h1>React App-Installation</h1>**](https://github.com/chinmayakumardas/Reactjs/)
<pre><code>npx create-react-app “project-name”</code></pre>
<p>npx create-react-app “project-name”<br>
or<br>  
<code>npm create vite@latest</code></p>

<p>Run:<br>
<code>npm run start or npm run dev</code></p>

<p>Run the react App:<br>
react App<code>npm run Start</code></p>
Vite Package<code>npm run dev</code></pre>

<p>Build:<br>
<code>npm run build</code></p>

[**<h1>Tailwind-Installation</h1>**](https://github.com/chinmayakumardas/Reactjs/)
<p>First install this:</p>
<pre>npm install -D tailwindcss postcss autoprefixer</pre>

<p>Run the command </p>>
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


