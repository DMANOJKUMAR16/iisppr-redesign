import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-6 md:px-16">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl"></div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[12%] top-[30%] h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[30%] h-28 w-28 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Light Beam */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[300px] -translate-x-1/2 bg-cyan-500/10 blur-3xl"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center text-center">

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl"
        >
          Future Of Modern Education
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
        >
          Transforming Learning Through{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Innovation
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300"
        >
          Empowering students with future-ready education, immersive learning
          experiences, and globally recognized academic excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105">
            Explore Programs

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
            Learn More
          </button>
        </motion.div>

        {/* Floating Stats */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">

          {[
            { number: "10K+", label: "Active Students" },
            { number: "120+", label: "Expert Faculties" },
            { number: "98%", label: "Placement Success" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/10"
            >
              <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-4xl font-black text-transparent">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;