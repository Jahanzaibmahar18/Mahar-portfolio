import React from 'react';

const HeroSkills = () => {
    const skills = [
        { title: 'HTML5', proficiency: 90, color: 'bg-orange-500', icon: '5' },
        { title: 'CSS3', proficiency: 85, color: 'bg-blue-600', icon: '3' },
        { title: 'Bootstrap', proficiency: 80, color: 'bg-purple-600', icon: 'B' },
        { title: 'Tailwind CSS', proficiency: 90, color: 'bg-cyan-400', icon: '≈' },
        { title: 'Framer Motion', proficiency: 86, color: 'bg-blue-500', icon: 'M' },
        { title: 'JavaScript', proficiency: 75, color: 'bg-yellow-400', icon: 'JS' },
        { title: 'React.js', proficiency: 80, color: 'bg-sky-400', icon: '⚛' },
        { title: 'WordPress', proficiency: 92, color: 'bg-sky-700', icon: 'W' },
    ];

    return (
        <section id="skills" className="section scroll-mt-24 bg-[#8CC2FD] py-20">
            <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section (TEXT ANIMATION) */}
                <div
                    className="section-header max-w-3xl mx-auto text-center mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[0.25em] text-slate-900">
                        Skills
                    </h2>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill) => (
                        <article 
                            key={skill.title} 
                            className="relative overflow-hidden rounded-3xl border border-white/20 bg-white p-6 shadow-xl shadow-slate-900/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                            data-aos="flip-left"
                        >
                            {/* Skill Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl font-black mb-6 shadow-md">
                                {skill.icon}
                            </div>

                            {/* Skill Title */}
                            <h3 className="text-xl font-bold text-slate-800 mb-6">
                                {skill.title}
                            </h3>

                            {/* Progress Bar */}
                            <div className="w-full mt-auto">
                                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                                    <div 
                                        className={`h-full ${skill.color} rounded-full transition-all duration-1000`} 
                                        style={{ width: `${skill.proficiency}%` }}
                                    ></div>
                                </div>
                                
                                <p className="text-xs font-semibold text-slate-500">
                                    Proficiency: <span className="text-slate-800 font-bold">
                                        {skill.proficiency}%
                                    </span>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeroSkills;