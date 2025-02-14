import "windi.css"; // Import WindiCSS instead of globals.css
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Enable Vercel insights
import { useState, useEffect } from "react";

/**
 * Custom App Component for Next.js
 *
 * This component wraps every page in your application with a consistent layout.
 * It includes the Navbar at the top, a dark/light mode toggle button, and applies global styling using WindiCSS classes.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  // Set up state for theme management.
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Apply the theme by toggling the "dark" class on the <html> element.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Toggle function to switch themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      {/* Dark/Light Mode Toggle Button */}
      <div className="p-4 flex justify-end">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 border rounded focus:outline-none"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <Component {...pageProps} />
      <SpeedInsights />
    </div>
  );
}