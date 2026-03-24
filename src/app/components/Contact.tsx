import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "masrufali24@gmail.com",
      href: "mailto:masrufali24@gmail.com",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9883206384",
      href: "tel:+919883206384",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka (Originally from West Bengal)",
      href: null,
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/masruf-ali-09739835a/",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Masruf-Ali",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">{item.label}</p>
                      <p className="text-lg">{item.value}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {item.href ? (
                      <a href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-4"
              >
                <p className="text-sm text-gray-300 mb-4">Connect on social media:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} p-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2`}
                      >
                        <Icon size={24} />
                        <span>{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Open to Opportunities
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  I'm actively seeking internship and entry-level positions in cloud engineering, 
                  DevOps, and full-stack development. Let's build something amazing together!
                </p>
                <a
                  href="mailto:masrufali24@gmail.com"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-2xl text-lg"
                >
                  Send me an email
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center pt-8 border-t border-white/20"
          >
            <p className="text-gray-400">
              © 2026 Masruf Ali. Built with passion and dedication.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
