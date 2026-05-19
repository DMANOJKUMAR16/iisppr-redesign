import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="innovation"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-10 pt-28 md:px-16"
    >

      {/* Background Glow */}
      <div className="absolute left-[20%] top-[10%] h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]"></div>

      <div className="absolute bottom-[-100px] right-[10%] h-[300px] w-[300px] rounded-full bg-lime-500/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl md:p-16"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
            Future Begins Here
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Redefining The Future Of{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-transparent">
              Modern Education
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Empowering students with immersive learning experiences,
            future-ready programs, and innovative education systems.
          </p>

          <a
            href="#programs"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Explore Programs
          </a>

        </motion.div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 md:flex-row">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 font-black text-black">
              I
            </div>

            <div>
              <h3 className="font-semibold">
                IISPPR Academy
              </h3>

              <p className="text-sm text-gray-400">
                Future Learning Platform
              </p>
            </div>

          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-8 text-sm text-gray-400">

            {[
              { name: "Programs", link: "#programs" },
              { name: "Innovation", link: "#innovation" },
              { name: "Testimonials", link: "#testimonials" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">

            {[FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, index) => (
              <button
                key={index}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white"
              >
                <Icon />
              </button>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;