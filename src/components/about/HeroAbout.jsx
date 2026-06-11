import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    number: "85+",
    title: "Projects",
    description:
      "Successfully delivered modern web applications and business solutions.",
  },
  {
    number: "25+",
    title: "Clients",
    description:
      "Trusted by startups, businesses, and organizations worldwide.",
  },
  {
    number: "5+",
    title: "Awards",
    description:
      "Recognized for innovation, design excellence, and development quality.",
  },
];

const HeroAbout = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-blue-300 py-20 px-4 md:px-8 overflow-hidden font-sans scroll-mt-24"
    >
      {/* Background Blur */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Heading */}
        <div className="mb-14 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-wide">
            About Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Side */}
          <div
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            data-aos="fade-right"
          >
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              I specialize in creating scalable web applications that combine
              powerful backend systems with engaging user experiences. Every
              solution is designed to be fast, secure, maintainable, and ready
              for future growth.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed border-l-4 border-[#1e3a8a] pl-5 italic bg-slate-50 py-4 rounded-r-xl">
              My focus is simple: transform ideas into reliable digital
              products that drive business growth and deliver exceptional user
              experiences.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 hover:bg-blue-50 transition-all duration-300">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                  Expertise
                </p>
                <p className="mt-2 text-slate-900 font-semibold">
                  React, Next.js, Node.js, Express, APIs & Databases
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 hover:bg-blue-50 transition-all duration-300">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                  Focus
                </p>
                <p className="mt-2 text-slate-900 font-semibold">
                  Performance, Scalability, UI/UX & Clean Architecture
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="lg:col-span-5 bg-[#1e3a8a] text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            data-aos="fade-left"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-sky-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500" />

            <div className="relative z-10 space-y-6">
              <div className="border-b border-blue-700 pb-5">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
                  What I Build
                </span>
                <strong className="text-xl font-semibold">
                  Full-Stack Web Applications & Business Platforms
                </strong>
              </div>

              <div className="border-b border-blue-700 pb-5">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
                  How I Work
                </span>
                <strong className="text-xl font-semibold">
                  Modern Technologies, Clean Code & Scalable Systems
                </strong>
              </div>

              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
                  Why Choose Me
                </span>
                <strong className="text-xl font-semibold">
                  Reliable Solutions That Grow With Your Business
                </strong>
              </div>
            </div>

            <div className="w-full h-1.5 bg-amber-400 absolute bottom-0 left-0"></div>
          </div>
        </div>

        {/* Smaller Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* Top Gradient */}
              <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-blue-700 to-cyan-400"></div>

              {/* Hover Glow */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-[#1e3a8a] mb-2 transition-transform duration-300 group-hover:scale-105">
                  {item.number}
                </h3>

                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;