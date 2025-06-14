import { useContext, useEffect } from "react";
import ThemeContext from "./state/ThemeContext ";
const ThemeToggle = () => {
  // Hapus state lokal, gunakan state dari context
  const themeContext = useContext(ThemeContext);
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const toggleTheme = () => {
    // Baca status tema dari context
    const newMode = !themeContext.theme;
    localStorage.setItem("isDarkmode", newMode);
    localStorage.setItem("asd", newMode);
    themeContext.setTheme(newMode); // Perbarui state di context
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkmode") === "true";
    themeContext.setTheme(savedMode); // Inisialisasi state di context
  }, [themeContext.setTheme]); // Tambahkan dependensi

  return (
    <button
      className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={toggleTheme}
    >
      <div
        className={`w-6 h-6 relative rounded-full transition duration-500 transform p-1 text-white ${
          themeContext.theme
            ? "bg-gray-700 translate-x-full" // Gunakan isDarkmode dari context
            : "bg-yellow-500 -translate-x-2"
        }`}
      >
        { themeContext.theme ? darkIcon : lightIcon} {/* Gunakan isDarkmode dari context */}
      </div>
    </button>
  );
}; // isDarkmode di sini akan dibaca dari themeContext.theme

export default ThemeToggle;
