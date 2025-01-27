/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Tailwind를 사용할 파일 경로 설정
  theme: {
    extend: {
      colors: {
        customBlue: "#3379ab", // 원하는 색상 추가
      },
      transform: {
        perspective: "1000px",
      },
    },
  },
  plugins: [],
};
