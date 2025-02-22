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
        
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">
          Hello, I'm Peter Chibuikem Idoko, a passionate computer scientist dedicated to crafting solutions to help my community.
        </p>
        <p className="mt-4">
          For this website, I worked with Next.js and implemented utility-first styling with Windi CSS, ensuring that the website is visually appealing, fast, scalable, and SEO-friendly.
        </p>
        <p className="mt-4">
          I believe in the power of well-refactored code and thoughtful design to solve real-world challenges. Whether building dynamic applications or refining existing codebases, I focus on clarity, performance, and maintainability.
        </p>
        <p className="mt-4">
          When I'm not coding, you can find me exploring new technologies, playing basketball, or brainstorming innovative ideas to improve my community. I invite you to explore my projects and get in touch if you'd like to collaborate.
        </p>

        {/* Resume Download Button */}
        <div className="mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download Resume Here
          </a>
        </div>

        
      </main>
    </>
  );
}
