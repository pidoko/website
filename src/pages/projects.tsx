import Head from "next/head";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

export type ProjectsProps = {
  repos: Repo[];
};

/**
 * Projects Page Component
 *
 * This component displays a list of GitHub repositories for the user "pidoko"
 * at build time, excluding the "CS5330" repository.
 * It uses Windi CSS utility classes for styling.
 */
export default function Projects({ repos }: ProjectsProps) {
  return (
    <>
      {/* SEO meta tags */}
      <Head>
        <title>My Projects | My Portfolio</title>
        <meta
          name="description"
          content="A showcase of my GitHub projects, excluding certain repositories."
        />
      </Head>

      {/* Main content area */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">My Projects</h1>

        {repos.length > 0 ? (
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
          </ul>
        ) : (
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            No projects available at the moment.
          </p>
        )}
      </main>
    </>
  );
}

/**
 * getStaticProps fetches GitHub repositories for the user "pidoko"
 * and filters out the repository named "CS5330". It returns the result
 * as props to the Projects component.
 */
export async function getStaticProps() {
  try {
    // Fetch repositories from the GitHub API
    const res = await fetch("https://api.github.com/users/pidoko/repos");
    if (!res.ok) {
      console.error(`Error fetching repos: ${res.statusText}`);
      return { props: { repos: [] }, revalidate: 60 };
    }
    const data: Repo[] = await res.json();

    // Filter out the repository named "CS5330"
    const repos = data.filter((repo) => repo.name !== "CS5330");

    return { props: { repos }, revalidate: 60 };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { props: { repos: [] }, revalidate: 60 };
  }
}
