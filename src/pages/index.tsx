import Head from "next/head";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Home Page Component
 *
 * This component represents the landing page of your portfolio.
 * It uses Next.js's Head component for SEO and meta information,
 * and Windi CSS utility classes for styling.
 */
export default function Home() {
  const { scrollYProgress } = useScroll(); // Track scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]); // Scale effect

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

      {/* Hero Section with Parallax */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{ scale }}
      >
        <h1 className="text-4xl text-center font-bold">Peter Chibuikem Idoko</h1>
        <h2 className="text-xl text-center text-gray-700 dark:text-gray-300 mt-2">
          Computing Professional
        </h2>
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
        {/* Career Timeline */}
        <Timeline />

        {/* Skills Section */}
        <Skills />
      </motion.section>
    </>
  );
}
