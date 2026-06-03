import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <AppRoutes theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
