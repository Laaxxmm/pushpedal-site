"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { QuestionMarkCircle, ArrowDown, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// =================================================================================================
// FAQItem Component
// =================================================================================================

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="mb-4 border border-Border rounded-2xl overflow-hidden"
            layout
        >
            <motion.button
                className="w-full text-left py-4 px-6 flex items-center justify-between font-Body text-Foreground hover:bg-Muted focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ backgroundColor: '#1A1A1A' }}
                transition={{ duration: 0.2 }}
            >
                <span className="text-[clamp(1rem,2vw,1.25rem)]">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowDown size={20} color="#FFFFFF" />
                </motion.div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="py-4 px-6 bg-Muted"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p className="font-Body text-Secondary text-[clamp(0.875rem,1.5vw,1rem)]">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// =================================================================================================
// FAQSection Component
// =================================================================================================

const FAQSection = ({ title, questions }: { title: string, questions: { question: string, answer: string }[] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-Foreground font-Heading text-[clamp(2rem,5vw,3.5rem)] mb-12"
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {title}
                </motion.h2>
                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {questions.map((faq, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// =================================================================================================
// ContactSupport Component
// =================================================================================================

const ContactSupport = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="bg-Muted py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-Foreground font-Heading text-[clamp(2rem,5vw,3.5rem)] mb-8"
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Need More Help?
                </motion.h2>
                <motion.p
                    className="font-Body text-Secondary text-[clamp(1rem,2vw,1.25rem)] mb-12"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                >
                    Contact our support team for any further assistance.
                </motion.p>
                <motion.div
                    className="flex items-center justify-center space-x-8"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                >
                    <a href="mailto:support@pushpedal.com" className="flex items-center space-x-2 text-Foreground hover:text-Accent transition-colors duration-300">
                        <Mail size={20} />
                        <span className="font-Body text-[clamp(1rem,2vw,1.25rem)]">support@pushpedal.com</span>
                    </a>
                    <a href="tel:+919876543210" className="flex items-center space-x-2 text-Foreground hover:text-Accent transition-colors duration-300">
                        <Phone size={20} />
                        <span className="font-Body text-[clamp(1rem,2vw,1.25rem)]">+91 98765 43210</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

// =================================================================================================
// Page Component
// =================================================================================================

const Page = () => {
    const general_questions = [
        {
            question: "What is Pushpedal?",
            answer: "Pushpedal is a professional cycling training program designed to help young cyclists in Bangalore, India, excel in competitions. We provide expert coaching and a supportive environment to nurture their talent."
        },
        {
            question: "What age groups do you cater to?",
            answer: "We cater to children aged 5-16 years old."
        },
        {
            question: "Where are the training sessions held?",
            answer: "Our training sessions are held at designated cycling tracks and parks across Bangalore. Specific locations will be communicated upon registration."
        }
    ];

    const program_specific_questions = [
        {
            question: "What programs do you offer?",
            answer: "We offer beginner, intermediate, and advanced training programs tailored to different skill levels and age groups. Each program focuses on specific techniques, endurance, and competition strategies."
        },
        {
            question: "How long is each training session?",
            answer: "Each training session is typically 1.5 to 2 hours long, depending on the program level."
        },
        {
            question: "What equipment do I need?",
            answer: "Participants need their own bicycle, helmet, and appropriate cycling attire. We may provide additional equipment for specific drills and exercises."
        }
    ];

    const registration_questions = [
        {
            question: "How do I register my child for a program?",
            answer: "You can register your child through our website by filling out the registration form and paying the program fee. Alternatively, you can visit our office for in-person registration."
        },
        {
            question: "What is the registration fee?",
            answer: "The registration fee varies depending on the program. Please check our website or contact us for the latest fee structure."
        },
        {
            question: "What is the refund policy?",
            answer: "We have a flexible refund policy. If you cancel before the program starts, you will receive a full refund. Partial refunds are available for cancellations made after the program has commenced, subject to certain conditions."
        }
    ];

    const competition_questions = [
        {
            question: "What kind of competitions do you prepare the children for?",
            answer: "We prepare children for local, regional, and national level cycling competitions. Our training programs are designed to enhance their competitive edge."
        },
        {
            question: "Do you provide competition support?",
            answer: "Yes, we provide comprehensive competition support, including pre-race guidance, on-site coaching, and logistical assistance."
        },
        {
            question: "What are the success stories of Pushpedal?",
            answer: "Many of our students have achieved significant success in cycling competitions. Visit our website to read their inspiring stories and achievements."
        }
    ];

    return (
        <div className="bg-Background min-h-screen">
            <FAQSection title="General Questions" questions={general_questions} />
            <FAQSection title="Program Specific Questions" questions={program_specific_questions} />
            <FAQSection title="Registration Questions" questions={registration_questions} />
            <FAQSection title="Competition Questions" questions={competition_questions} />
            <ContactSupport />
        </div>
    );
};

export default Page;