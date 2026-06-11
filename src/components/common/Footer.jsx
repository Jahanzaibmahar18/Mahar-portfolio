import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  const customerServiceLinks = [
    { name: 'Customer Service', href: '#customer-service' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Privacy Policy', href: '#privacy-policy' },
    { name: 'Terms & Conditions', href: '#terms' },
  ];

  return (
    <footer className="bg-[#0b1322]  text-slate-300 py-12 px-6 sm:px-12 lg:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: About Me */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <FaUser className="text-yellow-400 w-6 h-6" />
            <h2>About Me</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Passionate developer building modern web apps. Focused on clean code, 
            responsive design, and seamless user experience.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl">Quick Links</h2>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
                >
                  <FiChevronRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-400 transition-colors" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl">Customer Service</h2>
          <ul className="space-y-2.5 text-sm">
            {customerServiceLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
                >
                  <FiChevronRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-400 transition-colors" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Connect With Me */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl">Connect With Me</h2>
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400 text-sm italic pt-2">
            Follow Me for updates!
          </p>
        </div>

      </div>

      {/* Bottom Copyright Section (Optional but standard design) */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Jahanzaib Mahar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;