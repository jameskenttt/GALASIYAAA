/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        snbold: ["SignikaNegative-Bold", "sans-serif"],
        snlight: ["SignikaNegative-Light", "sans-serif"],
        snmedium: ["SignikaNegative-Medium", "sans-serif"],
        snregular: ["SignikaNegative-Regular", "sans-serif"],
        snsemibold: ["SignikaNegative-SemiBold", "sans-serif"],


        
      }

    },
  },
  plugins: [],
}

