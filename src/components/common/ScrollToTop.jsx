import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 450)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed right-4 bottom-6 z-40 inline-flex items-center justify-center rounded-full bg-yellow-500 p-3 text-slate-900 shadow-lg shadow-slate-900/20 transition-opacity duration-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <FiArrowUp className="h-5 w-5" />
        </button>
    )
}

export default ScrollToTop
