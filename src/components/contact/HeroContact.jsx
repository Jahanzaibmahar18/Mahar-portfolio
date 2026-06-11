import React from 'react';

const HeroContact = () => {
    return (
        // Background color sets to the requested #8EC5FF hex code
        <section id="contact" className="section scroll-mt-24 bg-[#8EC5FF] py-20">
            <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="section-header max-w-3xl mx-auto text-center mb-16">
                    {/* Contact font size increased (text-3xl lg:text-4xl) and made ultra bold */}
                    <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-[0.25em] text-slate-900 mb-4">
                        Contact
                    </h2>
                    {/* Main idea text font size decreased from text-4xl/5xl down to text-2xl/3xl */}
                    <p className="text-2xl lg:text-3xl font-extrabold text-slate-800">
                        Let’s turn your ideas into a working website.
                    </p>
                    <p className="mt-4 text-slate-700 max-w-2xl mx-auto font-medium">
                        Ready for a new web project? Send me the details and I’ll get back to you with a clear plan.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                    
                    {/* Left Info Card */}
                    <div className="rounded-4xl border border-white/20 bg-white p-8 shadow-xl shadow-slate-900/10">
                        <p className="text-slate-800 text-lg font-bold mb-5">Reach out directly</p>
                        <p className="text-slate-600 leading-8 mb-6 font-medium">
                            I’m open to freelance work, collaborations, and full-time opportunities. Let’s connect and shape your next web experience.
                        </p>
                        <div className="space-y-4 text-slate-700">
                            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-100">
                                <p className="text-xs uppercase tracking-[0.35em] text-slate-400 font-bold">Email</p>
                                <p className="mt-2 font-bold text-slate-800">jahanzaibmahar18@gmail.com</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-100">
                                <p className="text-xs uppercase tracking-[0.35em] text-slate-400 font-bold">Location</p>
                                <p className="mt-2 font-bold text-slate-800">Bahawalpur, Pakistan</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-100">
                                <p className="text-xs uppercase tracking-[0.35em] text-slate-400 font-bold">Availability</p>
                                <p className="mt-2 font-bold text-slate-800">Open for projects</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <form className="rounded-4xl border border-white/20 bg-white p-8 shadow-xl shadow-slate-900/10 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <label className="group block">
                                <span className="text-sm font-bold text-slate-700">Name</span>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 transition font-medium text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                />
                            </label>
                            <label className="group block">
                                <span className="text-sm font-bold text-slate-700">Email</span>
                                <input
                                    type="email"
                                    placeholder="jahanzaibmahar18@gmail.com"
                                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 transition font-medium text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                />
                            </label>
                        </div>
                        <label className="group block">
                            <span className="text-sm font-bold text-slate-700">Message</span>
                            <textarea
                                rows="6"
                                placeholder="Tell me about your project"
                                className="mt-2 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 transition font-medium text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </label>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white transition-all shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default HeroContact;