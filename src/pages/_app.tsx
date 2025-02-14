import "windi.css"; // Import WindiCSS instead of globals.css
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Enable Vercel Speed Insights
import { useEffect, useState } from "react";

/**
 * Custom App Component for Next.js
 *
 * This component wraps every page in your application with a consistent layout.
 * It includes the Navbar at the top, dark mode support, and applies global styling using WindiCSS classes.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Check local storage or system preference for dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Toggle dark mode and store preference
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen transition-colors">
        <Navbar />
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md dark:bg-gray-200 dark:text-gray-900"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Component {...pageProps} />
        <SpeedInsights /> {/* Enables Vercel Speed Insights */}
      </div>
    </div>
  );
}
