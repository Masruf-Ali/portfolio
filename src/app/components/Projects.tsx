import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import foodOrderingImage from "figma:asset/2ef6337f3aedc4b64f510ed3354796a180bb6b13.png";
import awsMasterCourseImage from "figma:asset/e8740f8bf1756c5583d0252cc8861726426ebe4c.png";

export function Projects() {
  const { ref, isInView } = useInView();

  const projects = [
    {
      badge: "Full-Stack Web Application",
      badgeColor: "bg-purple-600",
      title: "Food – Online Food Ordering System",
      description: "A comprehensive full-stack food ordering web application featuring a robust backend built with Python Flask and an intuitive frontend using HTML, CSS, and JavaScript. The application implements RESTful API architecture for seamless communication between the client and server, providing users with a smooth ordering experience from menu browsing to order placement.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "REST API"],
      githubLink: "https://github.com/Masruf-Ali/Cafe-Restaurant-Food-Ordering-System",
      readmeLink: "https://github.com/Masruf-Ali/Cafe-Restaurant-Food-Ordering-System/blob/main/README.md",
      image: foodOrderingImage,
      icon: "🍔",
      iconBg: "from-orange-400 to-red-500",
      iconLabel1: "Food Ordering",
      iconLabel2: "System"
    },
    {
      badge: "AWS Full-Stack Learning Platform",
      badgeColor: "bg-orange-600",
      title: "AWS Master Course – Full Stack Project",
      description: "A full-stack AWS-themed learning platform built with HTML, CSS, JavaScript (Frontend) and Node.js + Express (Backend). This project demonstrates how a real-world cloud application connects frontend and backend using REST APIs and prepares the application for deployment on AWS.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "REST API", "AWS"],
      githubLink: "https://github.com/Masruf-Ali/-AWS-mastery-hub",
      readmeLink: "https://github.com/Masruf-Ali/-AWS-mastery-hub",
      image: awsMasterCourseImage,
      icon: "☁️",
      iconBg: "from-yellow-400 to-orange-600",
      iconLabel1: "AWS Mastery",
      iconLabel2: "Hub"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Real-world applications I've built
          </p>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 ${project.badgeColor} text-white text-sm rounded-full mb-4`}>
                      {project.badge}
                    </div>
                    <h3 className="text-3xl mb-4 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
                      >
                        <Github size={20} />
                        View on GitHub
                      </a>
                      <a
                        href={project.readmeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink size={20} />
                        View Details
                      </a>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 flex items-center justify-center">
                    {project.image ? (
                      <div className="w-full rounded-xl overflow-hidden shadow-xl">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-full aspect-square bg-gradient-to-br ${project.iconBg} rounded-xl flex items-center justify-center shadow-xl`}>
                        <div className="text-white text-center">
                          <div className="text-6xl mb-4">{project.icon}</div>
                          <p className="text-xl">{project.iconLabel1}</p>
                          <p className="text-sm opacity-80">{project.iconLabel2}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}