import "windi.css"; // Import WindiCSS instead of globals.css
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next" // Enable Vercel insights

/**
 * Custom App Component for Next.js
 *
 * This component wraps every page in your application with a consistent layout.
 * It includes the Navbar at the top and applies global styling using WindiCSS classes.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}