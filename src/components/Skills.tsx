import { motion } from "framer-motion";

const skills = {
  ProgrammingLanguages: ["Python", "JavaScript", "TypeScript", "PowerShell", "C++\n"],
  frameworksAndLibraries: ["Next.js", "React", "Windi CSS", "OpenCV", "Gradio"],
  cloudPlatforms: ["Google Cloud Platform (GCP)", "AWS", "Vercel", "Hugging Face Spaces"],
  machineLearning: [
    "Gray Level Co-occurrence Matrix (GLCM)",
    "Local Binary Patterns (LBP)",
    "Support Vector Machines (SVM)",
    "Random Forest",
    "k-Nearest Neighbors (k-NN)",
    "Logistic Regression",
    "Feature Extraction",
    "Image Classification"
  ],
  cybersecurity: [
    "NIST Framework",
    "Nessus Security Auditing",
    "Duo MFA",
    "Axonious Security Asset Management",
    "Veeam Immutable Backup",
    "Risk Assessment & Compliance",
    "Training"
  ],
  ITInfrastructure: ["Active Directory", "Group Policy", "Networking (DNS, DHCP, VPNs)", "System Administration (Windows, Linux, macOS)"],
  automationAndData: ["Airtable Automation", "AI-Powered Workflow Optimization", "Data Engineering", "Web Scraping"],
  projectManagement: ["Agile (Scrum, Kanban)", "CAPM Certification", "Technical Documentation", "Enterprise IT Rollouts"],
  webDevelopment: ["Responsive Design", "Server-Side Rendering (SSR)", "Static Site Generation (SSG)"],
  toolsAndTechnologies: ["OpenAI API", "MS Project", "SharePoint", "Tableau"],
  deploymentAndHosting: ["Vercel Deployment", "Hugging Face Spaces Deployment"]
};

export default function Skills() {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Tech Stack</h2>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, skillsArray]) => (
          <div key={category}>
            {/* Category Header */}
            <h3 className="text-xl font-semibold text-center mb-4">{category.replace(/([A-Z])/g, " $1")}</h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsArray.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center text-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
