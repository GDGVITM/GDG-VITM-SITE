import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'What is GDG VIT Mumbai and who can join?',
        a: 'GDG VIT Mumbai is a student-run Google Developer Group on campus at Vidyalankar Institute of Technology. Any student passionate about technology, design, or development is welcome to join regardless of year or branch.',
    },
    {
        q: 'How do I become a member of GDG VITM?',
        a: "You can apply through our website by clicking 'Join Us'. We review applications on a rolling basis and reach out to shortlisted candidates for a brief onboarding session.",
    },
    {
        q: 'What kind of events does GDG VITM organise?',
        a: 'We run hackathons, DevFests, study jams, workshops on Google technologies (Flutter, Firebase, Cloud, ML etc.), speaker sessions, and collaborative build sprints throughout the year.',
    },
    {
        q: 'Do I need prior coding experience to participate?',
        a: 'Not at all! We welcome beginners and experts alike. Our events are designed to be inclusive, with beginner tracks and hands-on mentoring from experienced members.',
    },
    {
        q: 'How can companies partner with or sponsor GDG VITM?',
        a: 'Reach out to us via the Contact page or email our core team directly. We offer various sponsorship tiers that give your brand exposure across our events and digital channels.',
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="relative w-full bg-[#0d0e0d] py-[100px] md:py-[160px] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="relative z-10 max-w-[860px] mx-auto px-6 md:px-[60px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#B6FF00] uppercase mb-4">
                        <span className="w-2 h-2 bg-[#B6FF00] inline-block" />
                        FAQs
                    </span>
                    <h2 className="text-[40px] md:text-[60px] font-bold tracking-tighter text-white leading-tight">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-3">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className={`border transition-all duration-500 overflow-hidden ${isOpen
                                    ? 'border-[#B6FF00]/40 bg-[#141514]'
                                    : 'border-white/[0.06] bg-[#0d0e0d] hover:border-white/10 hover:bg-[#111211]'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${i}`}
                                    className="w-full flex items-center justify-between px-8 py-7 text-left gap-6 group"
                                >
                                    <span className={`text-[17px] md:text-[19px] font-bold tracking-tight leading-snug transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                                        {f.q}
                                    </span>
                                    <motion.div
                                        animate={{
                                            rotate: isOpen ? 180 : 0,
                                            backgroundColor: isOpen ? "#B6FF00" : "rgba(182, 255, 0, 0)",
                                            borderColor: isOpen ? "#B6FF00" : "rgba(255, 255, 255, 0.1)"
                                        }}
                                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center border transition-colors duration-300"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-black' : 'text-white/40'}`} strokeWidth={2.5} />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            id={`faq-answer-${i}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="px-8 pb-8">
                                                <div className="w-12 h-px bg-[#B6FF00]/20 mb-6" />
                                                <p className="text-[15px] md:text-[16px] text-white/50 leading-relaxed font-medium max-w-[700px]">
                                                    {f.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
