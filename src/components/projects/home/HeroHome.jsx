import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../../../assets/myimage.png";

const HeroHome = () => {
  const words = [
    "Full Stack Web Developer",
    "UI/UX Designer",
    "MERN Stack Specialist",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && currentText === fullWord) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-slate-50 flex items-center justify-center overflow-hidden px-2 py-1 md:py-10 font-sans"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-120 h-120 md:w-160 md:h-160 bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[30%] w-100 h-100 md:w-140 md:h-140 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

        {/* LEFT CONTENT */}
        <div
          className="flex-1 max-w-2xl text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Hi, I am <span className="text-[#1e3a8a]">Jahanzaib</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-6 min-h-10 flex items-center">
            <span>{currentText}</span>
            <span className="inline-block w-0.75 h-7 bg-[#1e3a8a] ml-1 animate-pulse"></span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            I deliver{" "}
            <span className="text-[#1e3a8a] font-semibold">
              modern, scalable, and reliable web solutions
            </span>{" "}
            for businesses and worldwide clients. Specializing in{" "}
            <span className="text-slate-800 font-semibold">
              React, Next.js, TypeScript, and Node.js
            </span>
            , I turn complex ideas into seamless digital experiences that drive
            real business growth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white font-semibold px-6 py-3.5 rounded-lg shadow-md hover:bg-zinc-800 hover:shadow-lg transition-all duration-300 text-center min-w-37.5"
            >
              Start a Project
            </a>

            <a
              href="#projects"
              className="border-2 border-[#1e3a8a] bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-black transition-all duration-300 text-center min-w-37.5"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center items-center relative w-full max-w-md lg:max-w-lg">

          {/* Available Badge */}
          <div
            data-aos="fade-down"
            className="absolute top-5 left-[10%] md:left-0 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 z-20"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-700 tracking-wide">
              Available for Work
            </span>
          </div>

          {/* Profile Image */}
          <div
            data-aos="fade-up"
            className="relative w-75 h-75 sm:w-90 sm:h-90 md:w-95 md:h-95 lg:w-105 lg:h-105 rounded-full overflow-hidden border-[6px] hover:transform-rotate-6 duration-300 border-white shadow-[0_15px_50px_rgba(0,0,0,0.15)] z-10"
          >
            <img
              src={profilePic}
              alt="Jahanzaib Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div
            data-aos="fade-left"
            className="absolute bottom-2 right-[25%] md:right-2.5 bg-[#1e3a8a] text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20 border border-blue-700/50"
          >
            <span className="text-xs font-bold whitespace-nowrap tracking-wide">
              3+ Years Exp.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;