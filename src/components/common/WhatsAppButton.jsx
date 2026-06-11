import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
    const whatsappNumber = '923076341312' 
    const message = 'Hello!%20I%20would%20like%20to%20connect%20with%20you.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Open WhatsApp"
            className="fixed right-4 bottom-24 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-slate-900/30 transition-transform duration-300 hover:bg-[#1ebe5b] whatsapp-float"
        >
            <FaWhatsapp className="h-7 w-7" />
        </a>
    )
}

export default WhatsAppButton
