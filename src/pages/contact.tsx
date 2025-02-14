import Head from "next/head";

/**
 * Contact Page Component
 *
 * This page provides multiple ways to get in touch, including email, LinkedIn, and GitHub.
 * SEO meta tags are added via the Head component.
 */
export default function Contact() {
  return (
    <>
      {/* SEO: Define page title and meta description */}
      <Head>
        <title>Contact Me | Peter Chibuikem Idoko</title>
        <meta
          name="description"
          content="Get in touch via email, LinkedIn, or GitHub to discuss projects, collaborations, or opportunities."
        />
      </Head>

      {/* Main content area styled with Windi CSS */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-4">
          Email me at:{" "}
          <a
            href="mailto:pidoko@hotmail.com"
            className="text-blue-500 hover:underline"
          >
            pidoko@hotmail.com
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
      </main>
    </>
  );
}
