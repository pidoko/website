import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        // Filter out the repository with the title "CS5330"
        const filteredProjects = data.filter(
          (project: Project) => project.title !== "CS5330"
        );
        setProjects(filteredProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 dark:bg-gray-700 h-36 rounded-lg"
              ></div>
            ))
          : projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 font-bold hover:underline"
                >
                  {project.title}
                </a>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
              </motion.div>
            ))}
      </div>
    </main>
  );
}
