import "windi.css"; // Import WindiCSS instead of globals.css
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}