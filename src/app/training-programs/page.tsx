"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Image } from "next/image";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { ArrowRight, Calendar, CheckCircle, User, Star, Clock } from "lucide-react";

// ===========================================================================
// Floating Shape Component (3D Element)
// ===========================================================================
const FloatingShape = () => {
    return (
        <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    distort={0.4}
                    speed={2}
                    color="#00FFCC"
                />
            </mesh>
        </Float>
    );
};


// ===========================================================================
// Program Overview Component
// ===========================================================================
const ProgramOverview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            className="relative py-24 md:py-32 bg-muted text-white overflow-hidden"
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.3)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-8 text-center">
                    Our Training Philosophy
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter leading-relaxed mb-6">
                            At Pushpedal, we believe in nurturing young talents with a holistic approach. Our training programs are designed to not only enhance cycling skills but also instill discipline, teamwork, and a winning mindset.
                        </p>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter leading-relaxed mb-6">
                            We focus on personalized coaching, age-appropriate training modules, and a supportive environment that encourages every child to reach their full potential.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                        <Image
                            src="/cycling_overview.jpg" // Replace with your actual image path
                            alt="Cycling Training Overview"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full"
                            style={{ aspectRatio: "800 / 600" }}
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

// ===========================================================================
// Curriculum Details Component
// ===========================================================================
const CurriculumDetails = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const curriculumPoints = [
        "Fundamental Cycling Techniques",
        "Advanced Race Strategies",
        "Physical Conditioning and Endurance",
        "Nutrition and Recovery",
        "Bike Maintenance and Safety"
    ];

    return (
        <motion.section
            ref={ref}
            className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.3)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-8 text-center">
                    Curriculum Highlights
                </h2>
                <ul className="list-none space-y-4">
                    {curriculumPoints.map((point, index) => (
                        <li key={index} className="flex items-center space-x-4">
                            <CheckCircle className="text-cyan-400 w-6 h-6" />
                            <span className="text-[clamp(1rem,2vw,1.25rem)] font-inter">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    );
};

// ===========================================================================
// Age Groups Component
// ===========================================================================
const AgeGroups = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ageGroupDetails = [
        { age: "5-8", level: "Beginner", description: "Introduction to cycling basics and safety." },
        { age: "9-12", level: "Intermediate", description: "Developing advanced techniques and race strategies." },
        { age: "13-16", level: "Advanced", description: "Preparing for competitive cycling and tournaments." }
    ];

    return (
        <motion.section
            ref={ref}
            className="relative py-24 md:py-32 bg-muted text-white overflow-hidden"
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.3)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-8 text-center">
                    Age-Specific Programs
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {ageGroupDetails.map((group, index) => (
                        <div key={index} className="bg-1A1A1A p-6 rounded-2xl shadow-2xl shadow-black/10">
                            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">{group.age} Years</h3>
                            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-4">Level: {group.level}</p>
                            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter">{group.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};


// ===========================================================================
// Schedule Component
// ===========================================================================
const Schedule = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const scheduleDetails = [
        { day: "Monday", time: "4:00 PM - 5:30 PM", activity: "Skills Training" },
        { day: "Wednesday", time: "4:00 PM - 5:30 PM", activity: "Endurance Drills" },
        { day: "Friday", time: "4:00 PM - 5:30 PM", activity: "Race Simulation" }
    ];

    return (
        <motion.section
            ref={ref}
            className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.3)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-8 text-center">
                    Training Schedule
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-1A1A1A">
                                <th className="py-4 px-6 text-left">Day</th>
                                <th className="py-4 px-6 text-left">Time</th>
                                <th className="py-4 px-6 text-left">Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleDetails.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "" : "bg-1A1A1A"}>
                                    <td className="py-4 px-6">{item.day}</td>
                                    <td className="py-4 px-6">{item.time}</td>
                                    <td className="py-4 px-6">{item.activity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.section>
    );
};

// ===========================================================================
// Registration Component
// ===========================================================================
const Registration = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            className="relative py-24 md:py-32 bg-muted text-white overflow-hidden"
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.3)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-8 text-center">
                    Enroll Your Child Today!
                </h2>
                <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter leading-relaxed mb-6 text-center">
                    Ready to take the next step? Register your child for our training programs and watch them excel in the world of cycling.
                </p>
                <div className="flex justify-center">
                    <Link href="/register" className="bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-accent transition-colors duration-300">
                        Register Now <ArrowRight className="inline-block ml-2" />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

// ===========================================================================
// Hero Section Component
// ===========================================================================
const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const scaleX = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    return (
        <motion.section
            ref={ref}
            className="relative h-[calc(100vh-80px)] bg-black text-white overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.3)_1px,transparent_1px)] bg-[length:80px_80px] z-0"
                style={{ scaleX }}
            />
            <div className="absolute inset-0 z-[-1]">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 10, 5]} intensity={0.7} />
                    <FloatingShape />
                    <Environment preset="sunset" background blur={0.5} />
                </Canvas>
            </div>
            <div className="container mx-auto px-4 relative z-20 flex items-center justify-center h-full">
                <div className="text-center">
                    <motion.h1
                        className="text-[clamp(3rem,8vw,6rem)] font-lexend font-extrabold mb-4"
                        style={{ y }}
                    >
                        Training Programs
                    </motion.h1>
                    <motion.p
                        className="text-[clamp(1rem,2vw,1.25rem)] font-inter leading-relaxed mb-8"
                        style={{ y }}
                    >
                        Unlock your child's cycling potential with our expert training programs.
                    </motion.p>
                    <motion.div style={{ y }}>
                        <Link href="/register" className="bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-accent transition-colors duration-300">
                            Register Now <ArrowRight className="inline-block ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};


// ===========================================================================
// Main Page Component
// ===========================================================================
const Page = () => {
    return (
        <div className="bg-black text-white">
            <HeroSection />
            <ProgramOverview />
            <CurriculumDetails />
            <AgeGroups />
            <Schedule />
            <Registration />
        </div>
    );
};

export default Page;