/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: '#222955', // Dark Blue
        sec: '#3dbadb', // Light Blue
        accent1: '#553070',
        accent2: '#b42670',
        accent3: '#e36aa5',
        accent4: '#edc864',
        accent5: '#ffe092',
        accent6: '#eca555',
        accent7: '#d0573d',
        accent8: '#a31a16',
      },
      fontFamily: {
        manrope: ['manrope', 'sans'],
        inter: ['inter', 'sans'],
        baloo: ['"Baloo 2"', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
        cg: ['Century Gothic', 'sans-serif'],
        prim: ['Poppins', 'sans-serif'],
        sec: ['Century Gothic', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      letterSpacing: {
        tightest: '-.01em',
      },
      spacing: {
        logoSpacing: 'var(--logo-spacing)', // Use the face or asset circles as reference for spacing logos
      },
    },
  },
  plugins: [],
};
