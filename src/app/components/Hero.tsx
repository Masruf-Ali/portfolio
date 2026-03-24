import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import profilePhoto from "figma:asset/b71db29a3533c5f097c63ddc6a3cd9808fd6e384.png";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#06b6d4] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Masruf Ali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl mb-4 font-bold"
          >
            Masruf Ali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl text-cyan-400 mb-8 font-semibold"
          >
            Cloud Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12"
          >
            BCA Student | AWS Enthusiast | Python Developer
            <br />
            Building cloud solutions and web applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl text-lg font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="/Masruf_Ali_Resume.pdf"
              download="Masruf_Ali_Resume.pdf"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-all shadow-lg hover:shadow-2xl text-lg font-semibold flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan-500 transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.button>
    </section>
  );
}