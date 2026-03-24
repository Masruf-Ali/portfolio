import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Education
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Academic background and qualifications
          </p>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full mb-3">
                  Currently Pursuing
                </div>
                <h3 className="text-2xl md:text-3xl mb-2 text-gray-800">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xl text-purple-600 mb-4">
                  SB College of Management Studies
                </p>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-purple-500" />
                    <span>3rd Year Student (2023-2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-purple-500" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-gray-700">
                    Focused on cloud computing, web development, and software engineering. 
                    Actively pursuing AWS certifications and building practical projects to 
                    complement academic learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}