import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-ultra pointer-events-auto relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 shadow-glow custom-scrollbar"
            >
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-transparent"></div>
              </div>

              <div className="p-8 sm:p-12">
                <div className="mb-8">
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal">
                    {caseStudy.type}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white font-font-premium mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>

                <div className="mb-10 rounded-2xl bg-white/5 p-6 border border-white/10">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-white">
                    What We Built
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed">
                    {caseStudy.built}
                  </p>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 mb-10">
                  <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {caseStudy.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/80">
                          <CheckCircle2 size={20} className="text-teal shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {caseStudy.live !== "#" && (
                  <div className="border-t border-white/10 pt-8 text-center sm:text-left">
                    <a
                      href={caseStudy.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-premium inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 hover:bg-teal hover:shadow-glow active:scale-95"
                    >
                      View Live Project
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
