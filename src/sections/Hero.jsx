import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#050816] px-6 md:px-16">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Premium Gradient Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_30%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(132,204,22,0.18),transparent_30%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_45%)]"></div>

      {/* Animated Glow Layer */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[15%] top-[10%] h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[10%] h-[400px] w-[400px] rounded-full bg-lime-500/10 blur-[140px]"
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[12%] top-[30%] h-44 w-44 rounded-full bg-lime-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[30%] h-32 w-32 rounded-full bg-amber-400/10 blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(55)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -140],
            opacity: [0, 1, 0],
            scale: [0.8, 1.8, 0.8],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 10 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "linear",
          }}
          className="absolute z-[2] rounded-full bg-emerald-200/90 shadow-[0_0_18px_rgba(16,185,129,1)]"
          style={{
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
        />
      ))}


      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center pb-6 pt-24 text-center">

        {/* Floating Left Panel */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-[25%] hidden w-[230px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl lg:block"
        >
          <p className="text-left text-sm text-gray-300">
            AI Powered Learning Experience
          </p>

          <div className="mt-4 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-lime-400/20"></div>
        </motion.div>

        {/* Floating Right Panel */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-[35%] hidden w-[250px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400"></div>

            <div>
              <h3 className="font-semibold">
                Future Ready Programs
              </h3>

              <p className="text-sm text-gray-400">
                Modern industry curriculum
              </p>
            </div>
          </div>

          <div className="mt-5 h-2 rounded-full bg-white/10">
            <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-emerald-400 to-lime-400"></div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl"
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
          <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-transparent">
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
          Empowering students with future-ready education,
          immersive learning experiences, and globally
          recognized academic excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">

            Explore Programs

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">

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
              <h2 className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-4xl font-black text-transparent">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Bottom Fade Blend */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#050816]"></div>

    </section>
  );
};

export default Hero;