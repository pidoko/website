import Head from "next/head";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

type ProjectsProps = {
  repos: Repo[];
};

/**
 * Projects Page Component
 *
 * This component fetches the list of GitHub repositories for the user "pidoko"
 * at build time and displays them, excluding the "CS5330" repository.
 * Styling is handled via Windi CSS utility classes.
 */
export default function Projects({ repos }: ProjectsProps) {
  return (
    <>
      {/* SEO: Define page title and meta description */}
      <Head>
        <title>My Projects | Peter Chibuikem Idoko</title>
        <meta
          name="description"
          content="A showcase of my GitHub projects excluding some repositories."
        />
      </Head>

      {/* Main content area */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <ul className="mt-4">
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
        </ul>
      </main>
    </>
  );
}

/**
 * getStaticProps fetches the GitHub repositories for the user "pidoko" and filters
 * out the repository named "CS5330". The result is passed to the page component
 * as props.
 */
export async function getStaticProps() {
  // Fetch repositories from GitHub API
  const res = await fetch("https://api.github.com/users/pidoko/repos");
  const data: Repo[] = await res.json();

  // Filter out the repository with the name "CS5330"
  const repos = data.filter((repo) => repo.name !== "CS5330");

  return {
    props: { repos },
    revalidate: 60, // Revalidate at most every 60 seconds
  };
}