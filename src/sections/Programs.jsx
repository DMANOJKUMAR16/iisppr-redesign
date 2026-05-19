import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaGlobe,
} from "react-icons/fa";

const programs = [
  {
    title: "AI & Future Technologies",
    description:
      "Explore cutting-edge education focused on artificial intelligence and innovation.",
    icon: <FaBrain />,
    size: "large",
  },
  {
    title: "Global Learning",
    description:
      "Internationally aligned curriculum with immersive learning experiences.",
    icon: <FaGlobe />,
    size: "small",
  },
  {
    title: "Modern Development",
    description:
      "Industry-focused frontend and full-stack development programs.",
    icon: <FaLaptopCode />,
    size: "small",
  },
  {
    title: "Career Excellence",
    description:
      "Empowering students with placement-focused education and mentorship.",
    icon: <FaGraduationCap />,
    size: "large",
  },
];

const Programs = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-16">

      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[20%] h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]"></div>

      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-lime-500/10 blur-[120px]"></div>

      {/* Floating Particles */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120],
            opacity: [0, 1, 0],
            scale: [0.8, 1.5, 0.8],
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
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
            Programs
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Designed For The{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Innovative education programs crafted to empower future-ready
            students with immersive and industry-driven learning.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-3">

          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/10 ${
                program.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >

              {/* Card Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_40%)]"></div>

              {/* Floating Light */}
              <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl"></div>

              <div className="relative z-10 flex h-full flex-col justify-between">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 text-2xl text-black shadow-[0_0_30px_rgba(16,185,129,0.35)]">
                  {program.icon}
                </div>

                <div>

                  <h3 className="mt-10 text-3xl font-bold leading-tight">
                    {program.title}
                  </h3>

                  <p className="mt-5 max-w-md leading-relaxed text-gray-400">
                    {program.description}
                  </p>

                </div>

                {/* Bottom Line */}
                <div className="mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300"></div>

              </div>
            </motion.div>
          ))}

          {/* Floating Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/10"
          >

            <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl"></div>

            <div className="relative z-10">

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Performance
              </p>

              <h3 className="mt-6 bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-5xl font-black text-transparent">
                98%
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Student success rate through immersive and modern education programs.
              </p>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300"
                />
              </div>

            </div>
          </motion.div>

          {/* Vertical Achievement Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/10"
          >

            <div className="absolute bottom-[-40px] right-[-40px] h-36 w-36 rounded-full bg-lime-400/10 blur-3xl"></div>

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
                  Excellence
                </p>

                <h3 className="mt-6 text-4xl font-black">
                  120+
                </h3>

                <p className="mt-3 text-gray-400">
                  Expert mentors and industry professionals guiding future innovators.
                </p>
              </div>

              <div className="mt-10 h-[2px] w-24 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300"></div>

            </div>
          </motion.div>

        </div>

        {/* Floating Bottom Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-8 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
        >

          {/* Glow */}
          <div className="absolute right-[-50px] top-[-50px] h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-300">
                Innovation Driven
              </p>

              <h3 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                Creating Future-Ready Learning Experiences
              </h3>
            </div>

            <div className="max-w-md">
              <p className="leading-relaxed text-gray-400">
                Blending immersive technology, industry-driven curriculum,
                and modern learning environments to shape the next
                generation of innovators.
              </p>

              <button className="mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105">
                Explore Vision
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Programs;