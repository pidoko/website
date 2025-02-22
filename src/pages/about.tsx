import Head from "next/head";
import { motion } from "framer-motion";

/**
 * About Page Component
 *
 * This page showcases my career timeline, highlighting key milestones
 * It uses Next.js's Head component for SEO and meta details, while Windi CSS utility classes style the layout.
 */
export default function About() {
  const timelineEvents = [
    { year: "2016", title: "Academic Foundation", desc: "Started Bachelor of Technology in Technology Management at NAIT." },
    { year: "2019", title: "Information Technology", desc: "Started as an Information Systems Technician at First Nation of Nacho Nyak Dun." },
    { year: "2021", title: "Managerial Transition", desc: "Promoted to Information Systems Manager, leading IT strategy and cybersecurity initiatives." },
    { year: "2023", title: "Computing Professional", desc: "Started Master of Science in Computer Science at Northeastern University, focusing on artificial intelligence and cybersecurity." },
    { year: "2024", title: "Project Leadership", desc: "Worked as Project Coordinator at Northeastern University, designing automated registration and event management systems." },
    { year: "2024", title: "Enterprise IT Management", desc: "Started as IT Coordinator at VACFSS, enhancing security, asset management, and service operations." },
    { year: "2025", title: "Tech Leadership & Strategy", desc: "Pursuing Tech leadership roles to drive enterprise security, IT strategy, and digital transformation initiatives." }
  ];

  return (
    <>
      <Head>
        <title>About Me | Peter Chibuikem Idoko</title>
        <meta name="description" content="Explore my career journey and key milestones in my professional experience." />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">My Career Timeline</h1>
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-full">
                {event.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}