import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const timelineEvents = [
    { "year": "2016", "title": "Academic Foundation", "desc": "Started Bachelor of Technology in Technology Management at NAIT." },
    { "year": "2019", "title": "Information Technology", "desc": "Started as an Information Systems Technician at First Nation of Nacho Nyak Dun." },
    { "year": "2021", "title": "Managerial Transition", "desc": "Promoted to Information Systems Manager, leading IT strategy and cybersecurity initiatives." },
    { "year": "2023", "title": "Computing Professional", "desc": "Started Master of Science in Computer Science at Northeastern University, focusing on IT infrastructure and automation." },
    { "year": "2024", "title": "Project Leadership", "desc": "Worked as Project Coordinator at Northeastern University, designing automated registration and event management systems." },
    { "year": "2024", "title": "Enterprise IT Management", "desc": "Started as IT Coordinator at VACFSS, enhancing security, asset management, and service operations." },
    { "year": "2025", "title": "Tech Leadership & Strategy", "desc": "Pursuing Tech leadership roles to drive enterprise security, IT strategy, and digital transformation initiatives." }
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
