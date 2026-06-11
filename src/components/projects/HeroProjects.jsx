import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const HeroProjects = () => {
    const projects = [
        {
            title: 'Lawyer PI Consultancy',
            category: 'Legal Services',
            image: 'https://www.alkhaldilaw-firm.com/home/new-law-firm.jpg',
            live: 'https://lawyer-pi-three.vercel.app/',
        },
        {
            title: 'Lundary Laundry Service',
            category: 'Home Services',
            image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80',
            live: 'https://lundary.vercel.app/',
        },
        {
            title: 'Hafiz Quran Learning',
            category: 'Religious Education',
            image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=800&q=80',
            live: 'https://hafiz-quran-one.vercel.app',
        },
        {
            title: 'Modern E-Commerce Store',
            category: 'Online Shop',
            image: 'https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg',
            live: 'https://ecommerce-ochre-psi.vercel.app',
        },
        {
            title: 'Charity Support Foundation',
            category: 'Nonprofit',
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
            live: 'https://charity-blush-psi.vercel.app/',
        },
        {
            title: 'Floral Boutique Studio',
            category: 'Florist',
            image: 'https://blossomsflorals.com/cdn/shop/files/Bouquets_Cover.jpg?v=1768506153&width=2087',
            live: 'https://flowers-snowy-two.vercel.app/',
        },
        {
            title: 'Car Rental Booking',
            category: 'Automotive',
            image: 'https://img.magnific.com/premium-photo/green-car-with-word-honda-side_1153744-186142.jpg?semt=ais_hybrid&w=740&q=80',
            live: 'https://car-rental-yellow.vercel.app/',
        },
        {
            title: 'Restaurant Dining Landing',
            category: 'Hospitality',
            image: 'https://www.foodandwine.com/thmb/2JLRyA33lmwCF-GwhmnHgeuSQfs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/group-dinner-restaurant-blog0717-2000-dc8e7c5b15ba448e99d465a793c4f5fd.jpg',
            live: 'https://restaurant-rho-ruddy.vercel.app/',
        },
        {
            title: 'Personal Resume Portfolio',
            category: 'Portfolio',
            image: 'https://cdn.dribbble.com/userupload/24273215/file/original-cf2a86260863f05600e7aab9f2241b14.jpg?resize=2048x1536&vertical=center',
            live: 'https://resume-fkdy.vercel.app/',
        },
          {
            title: 'Al-Dosari Reserve Website',
            category: 'Conservation',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            live: 'https://al-dosari-reserve.vercel.app/',
        },
    ]


    return (
        <section id="projects" className="py-20 px-4 md:px-8 bg-[#8EC5FF] scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-slate-900">
                        My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-800">Projects</span>
                    </h2>
                    <p className="text-slate-800 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        A showcase of my recent work and professional achievements, demonstrating creativity, skill, and innovation in each project.
                    </p>
                </div>

                {/* 3-Column Grid Layout */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-white/40 shadow-2xl shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/30 aspect-4/3"
                        >
                            {/* Project Thumbnail Image */}
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
                            />

                            {/* Dark Interactive Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent p-6 md:p-8 flex flex-col justify-between">
                                
                                {/* Top Category Badge */}
                                <div className="flex justify-start">
                                    <span className="rounded-full bg-blue-600 text-white text-xs font-bold px-4 py-1.5 shadow-md">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Bottom Title & Action Button */}
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide line-clamp-2 drop-shadow-sm">
                                        {project.title}
                                    </h3>
                                    
                                    {/* View Project Action Link */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group/btn border-b border-white/30 pb-0.5 hover:border-white transition-all duration-300 w-fit"
                                    >
                                        View Project 
                                        <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </a>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HeroProjects