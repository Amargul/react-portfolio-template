import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 transition-all duration-300 hover:shadow-glow bg-light-surface dark:bg-dark-surface border border-light-borderLight dark:border-dark-borderLight hover:border-light-primary dark:hover:border-dark-primary ${className}`}
    >
      {/* Sun Icon - visible in light mode */}
      <span
        className={`absolute transition-all duration-300 ${isDark
            ? "opacity-0 scale-75 rotate-180"
            : "opacity-100 scale-100 rotate-0"
          } text-light-secondary dark:text-dark-secondary`}
      >
        <FaSun size={16} />
      </span>

      {/* Moon Icon - visible in dark mode */}
      <span
        className={`absolute transition-all duration-300 ${isDark
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-75 -rotate-180"
          } text-light-primary dark:text-dark-primary`}
      >
        <FaMoon size={16} />
      </span>
    </button>
  );
};

export default ThemeToggle;
