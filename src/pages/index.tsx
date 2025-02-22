import Head from "next/head";
import { motion } from "framer-motion";
import type { GetStaticProps } from "next";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

type HomeProps = {
  repos: Repo[];
};

/**
 * Home Page Component
 *
 * This component represents the landing page of your portfolio. It includes a hero section
 * featuring your professional details and a projects section that lists your GitHub repositories
 * (excluding the "CS5330" repository) along with links to your mosaicGenerator and textureClassification apps on Hugging Face.
 * Styling is handled via Windi CSS and animations are provided by Framer Motion.
 */
export default function Home({ repos }: HomeProps) {
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

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <h1 className="text-4xl text-center font-bold">Peter Chibuikem Idoko</h1>
        <h2 className="text-xl text-center text-gray-700 dark:text-gray-300 mt-2">
          Software Developer | IT Consultant | Mechanical Engineering Technologist
        </h2>
        <p className="text-center mt-4">
          Javascript, HTML, CSS, React, Java, Node.js, Python, MongoDB, SQL, Linux, Git, GitHub, Microsoft Azure, PyTorch, TensorFlow, APIs.
        </p>
        {/* Video Background */}
        <motion.video
          className="mt-8 max-w-full"
          src="/videos/vid2.mp4"
          poster="/images/img1.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Resume Download Button */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download Resume Here
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <ul className="mt-4">
        <li className="mt-2">
            <a
              href="https://huggingface.co/spaces/pidoko/mosaicGenerator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              mosaicGenerator App
            </a>
            <span>: Test the mosaic generator for yourself.</span>
          </li>
          <li className="mt-2">
            <a
              href="https://huggingface.co/spaces/pidoko/textureClassification"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Texture Classification App
            </a>
            <span>: Explore texture classification in action.</span>
          </li>
          {repos.map((repo) => (
            <li key={repo.id} className="mt-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repo.name}
              </a>
              {repo.description && <span>: {repo.description}</span>}
            </li>
          ))}
          
        </ul>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">
          Email me at:{" "}
          <a
            href="mailto:pidoko1@gmail.com"
            className="text-blue-500 hover:underline"
          >
            pidoko1@gmail.com
          </a>
        </p>
        <p className="mt-4">
          Connect with me on LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/pidoko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/pidoko
          </a>
        </p>
        <p className="mt-4">
          Check out my GitHub:{" "}
          <a
            href="https://github.com/pidoko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/pidoko
          </a>
        </p>
      </section>
    </>
  );
}

/**
 * getStaticProps fetches the GitHub repositories for the user "pidoko"
 * and filters out the repository named "CS5330". The result is passed to
 * the page component as props.
 */
export const getStaticProps: GetStaticProps = async () => {
  // Fetch repositories from GitHub API
  const res = await fetch("https://api.github.com/users/pidoko/repos");
  const data: Repo[] = await res.json();

  // Filter out the repository with the name "CS5330"
  const repos = data.filter((repo) => repo.name !== "CS5330");

  return {
    props: { repos },
    revalidate: 60, // Revalidate at most every 60 seconds
  };
};
