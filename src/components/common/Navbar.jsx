import { useState } from 'react'

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">

                {/* Brand / Logo (Left Side) */}
                <div className="flex items-center gap-3 min-w-60">
                    <span className="h-10 w-10 flex items-center justify-center bg-yellow-600 text-xl font-bold rounded-lg shadow-md">
                        M
                    </span>
                    <div>
                        <p className="text-base font-bold tracking-wide leading-tight text-white">
                            Jahanzaib 
                        </p>
                        <p className="text-xs text-yellow-300 font-medium">
                            Full Stack Web Developer
                        </p>
                    </div>
                </div>

                {/* Navigation Links (Perfectly Centered on Desktop) */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors duration-200 py-2"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right Side Empty Space/Action Button (To balance the centering) */}
                <div className="hidden md:block min-w-60 text-right">
                    <a
                        href="#contact"
                        className="inline-block bg-yellow-600 hover:bg-yellow-700 text-slate-900 text-xs font-semibold px-4 py-2 rounded-md transition-all"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 pt-2 pb-4 space-y-1">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-md transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar