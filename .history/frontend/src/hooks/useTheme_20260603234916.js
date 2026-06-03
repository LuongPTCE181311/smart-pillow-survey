// import { useState, useEffect } from "react";

// export default function useTheme() {
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     // Lấy theme từ localStorage
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//       // Nếu đã lưu trước đó
//       const dark = JSON.parse(savedTheme);
//       setIsDark(dark);
//       applyTheme(dark);
//     } else {
//       // Nếu lần đầu, mặc định dark mode
//       applyTheme(true);
//     }
//   }, []);

//   // Hàm áp dụng theme
//   const applyTheme = (dark) => {
//     const html = document.documentElement;
//     if (dark) {
//       html.classList.add("dark-theme");
//       html.classList.remove("light-theme");
//     } else {
//       html.classList.add("light-theme");
//       html.classList.remove("dark-theme");
//     }
//   };

//   // Hàm toggle giữa dark và light
//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     localStorage.setItem("theme", JSON.stringify(newTheme));
//     applyTheme(newTheme);
//   };

//   return { isDark, toggleTheme };
// }
