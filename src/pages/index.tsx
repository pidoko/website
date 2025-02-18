import Head from "next/head";

/**
 * Home Page Component
 *
 * This component represents the landing page of your portfolio.
 * It uses Next.js's Head component for SEO and meta information,
 * and Windi CSS utility classes for styling.
 */
export default function Home() {
  return (
    <>
      {/* SEO: Set page title and meta description */}
      <Head>
        <title>Peter Chibuikem Idoko</title>
        <meta
          name="description"
          content="Showcasing my professional experience and projects."
        />
      </Head>

      {/* Main content area styled using Windi CSS */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl text-center font-bold">
          Peter Chibuikem Idoko
        </h1>
        <h2 className="text-xl text-center text-gray-700 dark:text-gray-300 mt-2">
          Computing Professional
        </h2>
        <video
          className="mt-8 max-w-full"
          src="/videos/vid2.mp4" //
          poster="/images/img1.jpg" // A placeholder image before the video loads
          autoPlay
          loop
          muted
          playsInline
          preload="auto" // Adjust based on performance testing
        >
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
}
