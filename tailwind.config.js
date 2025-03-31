// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          'primary-hover': 'var(--primary-hover)',
        },
      },
    },
    plugins: [],
  };