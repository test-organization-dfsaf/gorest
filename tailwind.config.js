const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
      }
    },
  },
  plugins: [],
  safelist: ['w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12', 'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12',
  'sm:w-1/12', 'sm:w-2/12', 'sm:w-3/12', 'sm:w-4/12', 'sm:w-5/12', 'sm:w-6/12', 'sm:w-7/12', 'sm:w-8/12', 'sm:w-9/12', 'sm:w-10/12', 'sm:w-11/12', 'sm:w-12/12',
  'md:w-1/12', 'md:w-2/12', 'md:w-3/12', 'md:w-4/12', 'md:w-5/12', 'md:w-6/12', 'md:w-7/12', 'md:w-8/12', 'md:w-9/12', 'md:w-10/12', 'md:w-11/12', 'md:w-12/12',
  'lg:w-1/12', 'lg:w-2/12', 'lg:w-3/12', 'lg:w-4/12', 'lg:w-5/12', 'lg:w-6/12', 'lg:w-7/12', 'lg:w-8/12', 'lg:w-9/12', 'lg:w-10/12', 'lg:w-11/12', 'lg:w-12/12',
  'xl:w-1/12', 'xl:w-2/12', 'xl:w-3/12', 'xl:w-4/12', 'xl:w-5/12', 'xl:w-6/12', 'xl:w-7/12', 'xl:w-8/12', 'xl:w-9/12', 'xl:w-10/12', 'xl:w-11/12', 'xl:w-12/12',
  '2xl:w-1/12', '2xl:w-2/12', '2xl:w-3/12', '2xl:w-4/12', '2xl:w-5/12', '2xl:w-6/12', '2xl:w-7/12', '2xl:w-8/12', '2xl:w-9/12', '2xl:w-10/12', '2xl:w-11/12', '2xl:w-12/12'],

}