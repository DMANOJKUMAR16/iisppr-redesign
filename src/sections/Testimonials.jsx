import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science Student",
    review:
      "The immersive learning environment completely transformed my understanding of modern technologies.",
  },
  {
    name: "Sophia Patel",
    role: "AI Research Student",
    review:
      "Industry-driven programs and expert mentorship helped me gain real-world experience.",
  },
  {
    name: "Rahul Mehta",
    role: "Frontend Developer",
    review:
      "A futuristic educational experience that truly prepares students for the next generation.",
  },
  {
    name: "Emily Johnson",
    role: "Global Programs Student",
    review:
      "The innovative curriculum and modern learning ecosystem made education more engaging.",
  },
];

const Testimonials = () => {
  return (
    <section
        id="testimonials"
        className="relative scroll-mt-24 -mt-6 overflow-hidden px-6 py-20 md:px-16"
    >

      {/* Top Blend */}
      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-[#050816] to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]"></div>

      <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full bg-lime-500/10 blur-[120px]"></div>

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 10 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
          className="absolute rounded-full bg-emerald-200/80 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
          style={{
            width: `${3 + Math.random() * 3}px`,
            height: `${3 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
            Testimonials
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-transparent">
              Future Innovators
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Students experiencing modern education through immersive and future-ready learning systems.
          </p>
        </motion.div>

        {/* Infinite Moving Row */}
        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#050816] to-transparent"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#050816] to-transparent"></div>

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6"
          >

            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="min-w-[350px] rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/10"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-lg font-bold text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {item.role}
                    </p>
                  </div>

                </div>

                <p className="mt-8 leading-relaxed text-gray-300">
                  “{item.review}”
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

          {[
            { value: "10K+", label: "Students Empowered" },
            { value: "98%", label: "Success Rate" },
            { value: "120+", label: "Industry Mentors" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl transition-all duration-500 hover:bg-white/10"
            >

              <h3 className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-5xl font-black text-transparent">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Bottom Blend */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#050816]"></div>

    </section>
  );
};

export default Testimonials;