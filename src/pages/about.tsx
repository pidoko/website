import Head from "next/head";

/**
 * About Page Component
 *
 * This page provides information about the developer, including skills and experience.
 * It uses Next.js's Head component for SEO and meta details, while Windi CSS utility classes style the layout.
 */
export default function About() {
  return (
    <>
      {/* SEO: Define page title and meta description */}
      <Head>
        <title>About Me | My Portfolio</title>
        <meta
          name="description"
          content="Learn more about my professional experience, skills, and background as a software developer."
        />
      </Head>

      {/* Main content area styled with Windi CSS */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">
          I am a software developer with experience in Next.js, React, and backend systems.
        </p>
      </main>
    </>
  );
}