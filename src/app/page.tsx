"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Image as NextImage } from "next/image";
import Link from "next/link";
import { ArrowRight, Bike, Trophy, Users, Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const scrollHeight = element.scrollHeight - element.clientHeight;
      const progress = (element.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <motion.section
      ref={ref}
      className="relative h-[calc(100vh-80px)] bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />

      <motion.div
        className="container max-w-7xl mx-auto px-6 relative z-10"
        variants={heroVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-lexend font-bold leading-tight mb-4">
          Unleash Your Child's <span className="text-primary">Cycling Potential</span>
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-8">
          Professional cycling training for young champions in Bangalore. Win the competition with Pushpedal!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-primary text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Get Started <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-10"
        style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.5s ease-in-out 1s" }}
      >
        <span className="text-sm text-white">Scroll Down</span>
        <motion.div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#fff",
            transformOrigin: "left",
            scaleX: scrollProgress / 100,
          }}
        />
      </motion.div>
    </motion.section>
  );
};

const OurApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-muted text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />
      <motion.div
        className="container max-w-7xl mx-auto px-6 relative z-10"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold text-center mb-12" variants={itemVariants}>
          Our Winning Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-black border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <Bike className="text-primary mb-4 w-8 h-8" />
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Expert Coaching</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter">
              Certified coaches with years of experience in competitive cycling.
            </p>
          </motion.div>
          <motion.div
            className="bg-black border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <Trophy className="text-primary mb-4 w-8 h-8" />
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Personalized Training</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter">
              Customized training plans tailored to each child's skill level and goals.
            </p>
          </motion.div>
          <motion.div
            className="bg-black border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <Users className="text-primary mb-4 w-8 h-8" />
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Supportive Community</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter">
              A positive and encouraging environment where young cyclists can thrive.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const TrainingProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-black text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />
      <motion.div
        className="container max-w-7xl mx-auto px-6 relative z-10"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold text-center mb-12" variants={itemVariants}>
          Our Training Programs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-muted border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Beginner Program</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-4">
              For children who are new to cycling and want to learn the basics.
            </p>
            <ul className="list-disc pl-5 font-inter">
              <li>Basic cycling skills</li>
              <li>Safety techniques</li>
              <li>Fun cycling games</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-muted border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Intermediate Program</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-4">
              For children who have some cycling experience and want to improve their skills.
            </p>
            <ul className="list-disc pl-5 font-inter">
              <li>Advanced cycling techniques</li>
              <li>Endurance training</li>
              <li>Race preparation</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-muted border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Advanced Program</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-4">
              For children who are serious about competitive cycling and want to excel.
            </p>
            <ul className="list-disc pl-5 font-inter">
              <li>High-intensity training</li>
              <li>Competition strategies</li>
              <li>Personalized coaching</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-muted text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />
      <motion.div
        className="container max-w-7xl mx-auto px-6 relative z-10"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold text-center mb-12" variants={itemVariants}>
          What Parents Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-black border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
            </div>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-4">
              "Pushpedal has transformed my child's cycling skills and confidence. The coaches are amazing!"
            </p>
            <p className="text-[clamp(0.875rem,1.5vw,1rem)] font-inter font-semibold">- Priya Sharma</p>
          </motion.div>
          <motion.div
            className="bg-black border border-border rounded-2xl p-6 shadow-2xl shadow-black/10 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
              <Star className="text-primary mr-2" />
            </div>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-4">
              "The personalized training plans helped my child excel in competitions. Highly recommended!"
            </p>
            <p className="text-[clamp(0.875rem,1.5vw,1rem)] font-inter font-semibold">- Rajesh Kumar</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-black text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />
      <motion.div
        className="container max-w-7xl mx-auto px-6 relative z-10"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold text-center mb-12" variants={itemVariants}>
          Our Partners
        </motion.h2>
        <div className="flex items-center justify-center space-x-8 md:space-x-16">
          <motion.div variants={itemVariants}>
            <NextImage src="/partner1.png" alt="Partner 1" width={120} height={60} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NextImage src="/partner2.png" alt="Partner 2" width={120} height={60} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NextImage src="/partner3.png" alt="Partner 3" width={120} height={60} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-muted text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />
      <motion.div
        className="container max-w-7xl mx-auto px-6 relative z-10 text-center"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-8">
          Ready to Win?
        </h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] font-inter mb-8">
          Join Pushpedal today and give your child the winning edge!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-primary text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Contact Us <ChevronRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </motion.section>
  );
};

const Page = () => {
  return (
    <main className="bg-black">
      <HeroSection />
      <OurApproachSection />
      <TrainingProgramsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
};

export default Page;