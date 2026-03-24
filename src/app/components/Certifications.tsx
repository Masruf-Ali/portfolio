import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essential",
    issuer: "Simplilearn",
    icon: "☁️",
    color: "from-orange-400 to-orange-600",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MDMwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODkxNTQwNV85MTg3NDE0MTc1NzAxMDM4NTAzMC5wbmciLCJ1c2VybmFtZSI6Ik1yLiBNYXNydWYgQWxpIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion"
  },
  {
    title: "AWS Networking Basics",
    issuer: "Simplilearn",
    icon: "🌐",
    color: "from-cyan-400 to-cyan-600",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzNzgyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODkxODU1NF85MTg3NDE0MTc1NzA3MTU0MzE5Mi5wbmciLCJ1c2VybmFtZSI6Ik1yLiBNYXNydWYgQWxpICJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion"
  },
  {
    title: "Python for Beginners",
    issuer: "Simplilearn",
    icon: "🐍",
    color: "from-yellow-400 to-green-600",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODk2NDYyNV85MTg3NDE0MTc1NzY4ODEwNzUwMi5wbmciLCJ1c2VybmFtZSI6bnVsbH0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion"
  },
  {
    title: "Introduction to AWS Solutions",
    issuer: "Simplilearn",
    icon: "⚙️",
    color: "from-purple-400 to-pink-600",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NDkyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODkxODU0M185MzA2NTUwMTc1NzA3MTQ0MTgzNy5wbmciLCJ1c2VybmFtZSI6Ik1yLiBNYXNydWYgQWxpICJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion"
  }
];

export function Certifications() {
  const { ref, isInView } = useInView();

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Certifications
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Professional credentials and achievements
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md text-2xl`}>
                    {cert.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-gray-800">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Award size={16} className="text-purple-500" />
                      <span>{cert.issuer}</span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-cyan-100 to-purple-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center gap-4">
                <Award className="text-purple-600" size={32} />
                <div className="text-left">
                  <p className="text-2xl text-gray-800">4+ Certifications</p>
                  <p className="text-gray-600">AWS & Python Specialized</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}