import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-800">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Hello! I'm Masruf Ali, a passionate third-year BCA student at SB College of Management Studies, 
              currently based in Bengaluru for my studies. Originally from West Bengal, I've embarked on an 
              exciting journey into the world of cloud computing and software development.
            </p>
            
            <p>
              As an aspiring Cloud Engineer, I specialize in Amazon Web Services (AWS) with multiple 
              certifications including AWS Cloud Practitioner and AWS Networking Basics. My expertise 
              spans cloud infrastructure, networking, DevOps fundamentals, and full-stack development 
              using Python and JavaScript.
            </p>
            
            <p>
              I'm driven by continuous learning and hands-on project building. Whether it's developing 
              full-stack web applications or exploring cloud solutions, I'm always eager to take on new 
              challenges. I believe in the power of open-source collaboration and am excited to contribute 
              to innovative projects in the cloud computing space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}