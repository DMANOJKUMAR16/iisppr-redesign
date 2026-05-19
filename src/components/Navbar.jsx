const Navbar = () => {
  return (
    <header className="relative z-50 w-full px-6 pt-6 md:px-16">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-4 backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 text-sm font-bold text-black">
            I
          </div>

          <h2 className="hidden text-sm font-semibold text-white sm:block">
            IISPPR Academy
          </h2>

        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">

            {[
                { name: "Programs", link: "#programs" },
                { name: "Innovation", link: "#innovation" },
                { name: "Testimonials", link: "#testimonials" },
            ].map((item, index) => (
            <a
                key={index}
                href={item.link}
                className="text-sm text-gray-300 transition-colors duration-300 hover:text-white"
            >
                {item.name}
            </a>
                ))}

        </nav>

        {/* CTA */}
        <button className="rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-2 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105">
          Get Started
        </button>

      </div>
    </header>
  );
};

export default Navbar;