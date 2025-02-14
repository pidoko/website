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
          Hello, I'm Peter Chibuikem Idoko, a passionate computer scientist and entrepreneur dedicated to crafting clean, efficient, and user-friendly digital experiences.
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
      </main>
    </>
  );
}