/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
				xxs: "380px",
				xs: "480px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				lg2: "1100px",
				xl: "1280px",
				xl2: "1450px",
				"2xl": "1536px",
				xl3: "1540px",
			},
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(126.13deg, #FFFFFF 14.38%, rgba(226, 242, 255, 0.86) 74.7%, #ECF7FF 100.68%)",
        "ecosystem-heading":
          "linear-gradient(260.95deg, rgba(255, 255, 255, 0) 9.2%, #3661FF 122.1%)",
        "product-heading":
          "linear-gradient(260.95deg, rgba(255, 255, 255, 0) 4.29%, #EBF4FF 100%, #C9E2FF 100%)",
        "product-heading-2": "linear-gradient(180deg, #FFFFFF 0%, #E1F4FF 100%)",
      },
    },
  },
  plugins: [],
};
