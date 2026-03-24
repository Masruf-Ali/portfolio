import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Cloud, Network, Terminal, Code, Bot, Github, Server, Cog, Layers } from "lucide-react";

export function Skills() {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "AWS (EC2, S3, Lambda, RDS, CloudWatch)", level: 85 },
        { name: "Cloud Architecture", level: 80 },
        { name: "Infrastructure as Code", level: 75 }
      ]
    },
    {
      category: "Programming Languages",
      icon: "💻",
      color: "from-cyan-400 to-cyan-600",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      category: "Web Development",
      icon: "🌐",
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Flask Framework", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "RESTful API Design", level: 85 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      color: "from-orange-400 to-orange-600",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Linux/Unix", level: 80 },
        { name: "Database Management", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Technologies and tools I work with
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl text-gray-800">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}