/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Tailwind를 사용할 파일 경로 설정
  theme: {
    extend: {
      transform: {
        perspective: "1000px",
      },
    },
  },
  plugins: [],
};
