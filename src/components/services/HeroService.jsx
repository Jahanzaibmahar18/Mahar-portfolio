import React from "react";
import { 
  FiLayout, 
  FiCpu, 
  FiLink, 
  FiSmartphone, 
  FiCloudLightning, 
  FiTrendingUp 
} from "react-icons/fi";

const HeroServices = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building modern, high-performance user interfaces using React.js, Next.js, and Tailwind CSS with clean, maintainable code structures.",
      icon: FiLayout,
    },
    {
      title: "WordPress Development",
      description: "Creating custom, fully manageable WordPress websites tailored to specific business requirements, ensuring complete control over your content.",
      icon: FiCpu,
    },
    {
      title: "API Integration",
      description: "Connecting frontend interfaces seamlessly with secure backend services, third-party platforms, and custom RESTful APIs.",
      icon: FiLink,
    },
    {
      title: "Responsive Design",
      description: "Ensuring pixel-perfect consistency and beautiful UI/UX layouts across every possible device, from mobile screens to large desktops.",
      icon: FiSmartphone,
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploying applications on Vercel, Netlify, and AWS with continuous updates, performance optimizations, robust monitoring, and advanced security enhancements.",
      icon: FiCloudLightning,
    },
    {
      title: "Performance & Growth",
      description: "Optimizing codebases and assets to deliver blazing-fast page speeds, improved Core Web Vitals, and enhanced search engine visibility.",
      icon: FiTrendingUp,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-[#8EC5FF] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header (TEXT ANIMATION ADDED) */}
        <div
          className="max-w-4xl mx-auto text-center mb-16"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
            Services
          </h2>
        </div>

        {/* 6 Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {/* Centered Icon */}
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 mb-6 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-md shadow-blue-100">
                  <Icon className="h-8 w-8" />
                </span>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-700">
                  {service.title}
                </h3>

                {/* Service Description (TEXT ANIMATION ADDED) */}
                <p
                  className="text-slate-600 leading-relaxed grow"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroServices;