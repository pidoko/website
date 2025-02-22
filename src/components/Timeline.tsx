import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const timelineEvents = [
  { year: "2018", title: "Mechanical Engineering", desc: "Started as a Mechanical Engineer" },
  { year: "2021", title: "Software & AI Transition", desc: "Began working on AI & software projects" },
  { year: "2023", title: "Computing Professional", desc: "Building high-performance applications today" },
];

export default function Timeline() {
  return (
    <div className="relative py-12">
      <h2 className="text-center text-3xl font-bold mb-8">My Career Journey</h2>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} year={event.year} title={event.title} desc={event.desc} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex items-center space-x-6"
    >
      <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-full">
        {year}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
}
